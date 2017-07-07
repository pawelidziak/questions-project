import {Component, OnInit} from '@angular/core';
import {IQuestion} from '../../_classes/Question';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {QuestionsService} from '../questions-list.service';
import {IAnswer} from '../../_classes/Answer';
import {IUser} from '../../_classes/User';
import {ModalComponent} from '../../profile/modal/modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.sass']
})
export class QuestionDetailComponent implements OnInit {

  question: IQuestion;
  errorMessage: any;

  answersArray: IAnswer[];
  commentsArray: IAnswer[];

  private sub: Subscription;

  constructor(private _route: ActivatedRoute, private _questionsService: QuestionsService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.answersArray = [];
    this.commentsArray = [];
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

  getQuestions(id: string) {
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

  filterResponses(): void {
    for (const response of this.question.answers) {
      this.answersArray.push(response);
    }
  }
}
