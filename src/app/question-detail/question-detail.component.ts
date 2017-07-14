import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {IQuestion} from '../_classes/Question';
import {IResponse} from '../_classes/Response';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {IUser} from '../_classes/User';
import {ModalComponent} from '../profile/modal/modal.component';
import {AppService} from '../_services/app.service';
import {VotingService} from '../_services/voting.service';
import {QuestionsService} from '../_services/questions.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.sass'],
  providers: [VotingService]
})
export class QuestionDetailComponent implements OnInit {

  question: IQuestion;
  errorMessage: any;

  disVoteUp = false;
  disVoteDown = false;

  answersArray: IResponse[];
  answersWithComments: any[];
  answers: number;

  private sub: Subscription;

  loading: boolean;

  constructor(private _route: ActivatedRoute, private _questionsService: QuestionsService, private modalService: NgbModal,
              private _appService: AppService, private _votingService: VotingService) {
  }

  ngOnInit() {
    this._appService.firstView = false;
    this.sub = this._route.params.subscribe(
      params => {
        const id = params['id'];
        const user = params['user'];
        this.getQuestion(id, user);
      });
  }

  initVotes() {
    if (this.question) {
      this._votingService.votes = this.question.votes;
      this._votingService.orgVotes = this.question.votes;
    }
  }

  voteUp() {
    this._votingService.voteUp();
    this.question.votes = this._votingService.votes;
    this.disVoteUp = this._votingService.disVoteUp;
    this.disVoteDown = this._votingService.disVoteDown;
  }

  voteDown() {
    this._votingService.voteDown();
    this.question.votes = this._votingService.votes;
    this.disVoteUp = this._votingService.disVoteUp;
    this.disVoteDown = this._votingService.disVoteDown;
  }

  openProfileModal(user: IUser) {
    const modalRef = this.modalService.open(ModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.user = user;
  }

  private getQuestion(id: number, user: string) {
    this.loading = true;
    this._questionsService.getQuestion(id, user)
      .subscribe(
        question => {
          this.question = question;
          this.filterResponses();
          this.initVotes();
          this.findLastTimeDiscussed();
          this.loading = false;
        },
        error => {
          this.errorMessage = <any>error;
          this.loading = false;
        });
  }

  private findLastTimeDiscussed() {

    if (this.question.responses.length > 0) {
      let time = new Date(this.question.responses[0].date).getTime();
      let lastDate = new Date(this.question.responses[0].date);

      for (const res of this.question.responses) {
        const tmp = new Date(res.date).getTime();
        if (tmp > time) {
          time = tmp;
          lastDate = new Date(res.date);
        }
      }

      this._appService.lastTimeDiscussed = lastDate;
    } else {
      this._appService.lastTimeDiscussed = null;
    }
  }

  private filterResponses(): void {
    if (this.question) {
      this.answersWithComments = [];
      this.answers = 0;
      for (const res of this.question.responses.reverse()) {
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


}
