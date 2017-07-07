import {Component, Input, OnInit} from '@angular/core';
import {IQuestion} from '../_classes/Question';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.sass']
})
export class QuestionDetailComponent implements OnInit {

  @Input('question') question: IQuestion;

  constructor() { }

  ngOnInit() {
  }

}
