import {Component, OnInit} from '@angular/core';
import {IQuestion} from '../../_classes/Question';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {QuestionsService} from '../questions-list.service';
import {IUser} from '../../_classes/User';
import {ModalComponent} from '../../profile/modal/modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {IResponse} from '../../_classes/Response';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.sass']
})
export class QuestionDetailComponent implements OnInit {

  question: IQuestion;
  errorMessage: any;

  answersArray: IResponse[];
  answersWithComments: any[];
  answers: number;

  private sub: Subscription;

  constructor(private _route: ActivatedRoute, private _questionsService: QuestionsService, private modalService: NgbModal,
              private _appService: AppService) {
  }

  ngOnInit() {
    this._appService.firstView = false;
    this.sub = this._route.params.subscribe(
      params => {
        const id = params['id'];
        this.getQuestions(id);
      });
  }

  openProfileModal(user: IUser) {
    const modalRef = this.modalService.open(ModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.user = user;
  }

  private getQuestions(id: string) {
    this._questionsService.getQuestion(id)
      .subscribe(
        question => {
          this.question = question;
          this.filterResponses();
        },
        error => {
          this.errorMessage = <any>error;
        });
  }

  private filterResponses(): void {
    this.answersWithComments = [];
    this.answers = 0;
    for (const res of this.question.responses) {
      this.answersArray = [];
      if (res.type === 'ANSWER') {
        this.answersArray.push(res);
        this.answers++;
        for (const res1 of this.question.responses) {
          if (res1.type === 'COMMENT' && res1.connectedTo === res.id) {
            this.answersArray.push(res1);
          }
        }
        this.answersWithComments.push(this.answersArray);
      }
    }
  }
}
