import {Component, Input, OnInit} from '@angular/core';
import {IQuestion} from '../../_classes/Question';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "../../profile/modal/modal.component";
import {IUser} from "../../_classes/User";

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.sass']
})
export class SingleQuestionComponent implements OnInit {

  @Input('question') question: IQuestion;

  responsesArray: any;
  responseArrayForDisplay: any;
  moreActivities: number;

  constructor(private modalService: NgbModal) {
  }

  openProfileModal(user: IUser) {
    const modalRef = this.modalService.open(ModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.user = user;
  }

  // method takes last 4 answers and add it to new array
  private filterResponseArray(): void {
    this.responseArrayForDisplay = [];
    if (this.responsesArray.length >= 4) {
      for (let i = this.responsesArray.length - 4; i < this.responsesArray.length; i++) {
        this.responseArrayForDisplay.push(this.responsesArray[i]);
      }
    } else {
      this.responseArrayForDisplay = this.responsesArray;
    }
  }

  // method calculates how many responses are left
  private calcLeftResponses(width: number): void {
    const changeWhen = 992;
    if (width < changeWhen) {
      this.moreActivities = this.responsesArray.length - 1;
    } else {
      this.moreActivities = this.responsesArray.length - this.responseArrayForDisplay.length;
    }
  }

  onResize(event: any) {
    this.calcLeftResponses(event.target.innerWidth);
  }

  ngOnInit() {
    this.responsesArray = this.question.answers;
    this.moreActivities = this.responsesArray.length;
    this.filterResponseArray();
    this.calcLeftResponses(window.innerWidth);
  }

}
