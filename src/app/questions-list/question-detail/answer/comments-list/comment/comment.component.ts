import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {IUser} from '../../../../../_classes/User';
import {ModalComponent} from '../../../../../profile/modal/modal.component';
import {IResponse} from '../../../../../_classes/Response';
import {VotingService} from '../../../../voting.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass'],
  providers: [VotingService]
})
export class CommentComponent implements OnInit {

  @Input('comment') comment: IResponse;
  @Input('commentsLength') commentsLength: number;
  @Input('i') i: number;

  disVoteUp = false;
  disVoteDown = false;

  constructor(private modalService: NgbModal, private _votingService: VotingService) { }

  ngOnInit() {
    this.initVotes();
  }

  initVotes() {
    this._votingService.votes = this.comment.votes;
    this._votingService.orgVotes = this.comment.votes;
  }

  voteUp() {
    this._votingService.voteUp();
    this.comment.votes = this._votingService.votes;
    this.disVoteUp = this._votingService.disVoteUp;
    this.disVoteDown = this._votingService.disVoteDown;
  }

  voteDown() {
    this._votingService.voteDown();
    this.comment.votes = this._votingService.votes;
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
