import {Component, Input, OnInit} from '@angular/core';
import {IAnswer} from '../../../_classes/Answer';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {IUser} from '../../../_classes/User';
import {ModalComponent} from '../../../profile/modal/modal.component';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.sass']
})
export class AnswerComponent implements OnInit {

  @Input('answer') answer: IAnswer;
  disableVoteUp = false;
  disableVoteDown = false;
  tmpVotes: number;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    this.tmpVotes = this.answer.votes;
  }

  vote(res: any, up: boolean): void {
    if (up) {
      res.votes = res.votes + 1;

      if (this.tmpVotes !== res.votes) {
        this.disableVoteUp = true;
      }
    } else {
      res.votes = res.votes - 1;
      if (this.tmpVotes  !== res.votes) {
        this.disableVoteDown = true;
      }
    }

    if (this.tmpVotes  === res.votes) {
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
