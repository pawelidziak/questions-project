import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {IUser} from '../../../_classes/User';
import {ModalComponent} from '../../../profile/modal/modal.component';
import {IResponse} from '../../../_classes/Response';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.sass']
})
export class AnswerComponent implements OnInit {

  @Input('response') response: IResponse[];
  disableVoteUp = false;
  disableVoteDown = false;
  tmpVotes: number;

  answer: IResponse;
  comments: IResponse[];

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    this.comments = [];
    this.initVariables();
    this.tmpVotes = this.answer.votes;
  }

  private initVariables(): void {
    this.answer = this.response[0];
    for (let i = 1; i < this.response.length; i++) {
      this.comments.push(this.response[i]);
    }
  }


  vote(res: any, up: boolean): void {
    if (up) {
      res.votes = res.votes + 1;

      if (this.tmpVotes !== res.votes) {
        this.disableVoteUp = true;
      }
    } else {
      res.votes = res.votes - 1;
      if (this.tmpVotes !== res.votes) {
        this.disableVoteDown = true;
      }
    }

    if (this.tmpVotes === res.votes) {
      this.disableVoteUp = false;
      this.disableVoteDown = false;
    }
  }

  openProfileModal(user: IUser) {
    const modalRef = this.modalService.open(ModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.user = user;
  }
}
