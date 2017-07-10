import {Component, Input, OnInit} from '@angular/core';
import {IQuestion} from '../../_classes/Question';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../../profile/modal/modal.component';
import {IUser} from '../../_classes/User';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.sass']
})
export class SingleQuestionComponent implements OnInit {

  @Input('question') question: IQuestion;

  responseArrayForDisplay: any;
  activities: number;
  responsesLength: number;

  constructor(private modalService: NgbModal) {
  }

  openProfileModal(user: IUser) {
    const modalRef = this.modalService.open(ModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.user = user;
  }

  // method calculates how many responses are left
  private calcLeftResponses(width: number): void {
    const small = 575;
    const medium = 992;
    if (width < small) {
      if (this.responsesLength > 1) {
        this.activities = this.responsesLength - 1;
      }
    } else if (width < medium) {
      if (this.responsesLength > 2) {
        this.activities = this.responsesLength - 2;
      } else {
        this.activities = 0;
      }
    } else {
      this.activities = this.responsesLength - this.responseArrayForDisplay.length;
    }
  }

  onResize(event: any) {
    this.calcLeftResponses(event.target.innerWidth);
  }


  ngOnInit() {
    this.responsesLength = this.question.responses.length;
    this.activities = this.responsesLength;

    // if array has more than 4 elements, slice it
    if (this.question.responses.length >= 4) {
      this.responseArrayForDisplay = this.question.responses.slice(this.question.responses.length - 4, this.question.responses.length);
    } else {
      this.responseArrayForDisplay = this.question.responses;
    }
    this.calcLeftResponses(window.innerWidth);

  }

}
