import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.sass']
})
export class SingleQuestionComponent implements OnInit {

  answersArray: any;
  answersArrayForLarge: any;
  moreActivities: number;

  constructor() {
  }

  ngOnInit() {
    this.answersArray = ['commented', 'commented', 'commented', 'commented'];
    this.answersArrayForLarge = [];
    this.moreActivities = this.answersArray.length;

    this.filterAnswerArray();
    this.calculateLessActivities(window.innerWidth);
  }

  filterAnswerArray(): void {
    if (this.answersArray.length >= 4) {
      for (let i = this.answersArray.length - 4; i < this.answersArray.length; i++) {
        this.answersArrayForLarge.push(this.answersArray[i]);
      }
      console.log(this.answersArrayForLarge);
    } else {
      this.answersArrayForLarge = this.answersArray;
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
