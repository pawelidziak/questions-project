import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {IUser} from '../../_classes/User';
import {ModalComponent} from '../../profile/modal/modal.component';
import {IResponse} from '../../_classes/Response';
import {VotingService} from '../../_services/voting.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.sass'],
  providers: [VotingService]
})
export class AnswerComponent implements OnInit {

  @Input('response') response: IResponse[];
  disVoteUp = false;
  disVoteDown = false;
  tmpVotes: number;

  answer: IResponse;
  comments: IResponse[];

  constructor(private modalService: NgbModal, private _votingService: VotingService) {
  }

  ngOnInit() {
    this.comments = [];
    this.initVariables();
    this.tmpVotes = this.answer.votes;
    this.initVotes();
  }

  private initVariables(): void {
    this.answer = this.response[0];
    for (let i = 1; i < this.response.length; i++) {
      this.comments.push(this.response[i]);
    }
  }

  initVotes() {
    this._votingService.votes = this.answer.votes;
    this._votingService.orgVotes = this.answer.votes;
  }

  voteUp() {
    this._votingService.voteUp();
    this.answer.votes = this._votingService.votes;
    this.disVoteUp = this._votingService.disVoteUp;
    this.disVoteDown = this._votingService.disVoteDown;
  }

  voteDown() {
    this._votingService.voteDown();
    this.answer.votes = this._votingService.votes;
    this.disVoteUp = this._votingService.disVoteUp;
    this.disVoteDown = this._votingService.disVoteDown;
  }

  openProfileModal(user: IUser) {
    const modalRef = this.modalService.open(ModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.user = user;
  }
}
