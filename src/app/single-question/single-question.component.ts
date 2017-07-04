import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../_classes/User';
import {IQuestion} from '../_classes/Question';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.sass']
})
export class SingleQuestionComponent implements OnInit {

  @Input('question') question: IQuestion;

  answersArray: any;
  answersArrayForLarge: any;
  moreActivities: number;

  constructor() {
  }

  ngOnInit() {
    this.answersArray = this.question.answers;
    this.moreActivities = this.answersArray.length;
    this.filterAnswerArray();
    this.calculateLessActivities(window.innerWidth);
  }

  filterAnswerArray(): void {
    this.answersArrayForLarge = [];
    if (this.answersArray.length >= 4) {
      for (let i = this.answersArray.length - 4; i < this.answersArray.length; i++) {
        this.answersArrayForLarge.push(this.answersArray[i]);
      }
    } else {
      this.answersArrayForLarge = this.answersArray;
      console.log(this.answersArrayForLarge);
    }
  }

  calculateLessActivities(width: number): void {
    const changeWhen = 992;
    if (width < changeWhen) {
      this.moreActivities = this.answersArray.length - 1;
    } else {
      this.moreActivities = this.answersArray.length - this.answersArrayForLarge.length;
    }
  }

  onResize(event: any) {
    this.calculateLessActivities(event.target.innerWidth);
  }
}
