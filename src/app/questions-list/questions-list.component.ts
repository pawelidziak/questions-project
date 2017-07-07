import {Component, OnInit} from '@angular/core';
import {QuestionsService} from './questions-list.service';
import {IQuestion} from '../_classes/Question';
import {IUser} from '../_classes/User';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.sass']
})
export class QuestionsListComponent implements OnInit {

  questions: IQuestion[];
  errorMessage: string;

  constructor(private _questionsService: QuestionsService) {
  }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this._questionsService.getQuestions()
      .subscribe(
        questions => {
          this.questions = questions;
        },
        error => {
          this.errorMessage = <any>error;
        });
  }

}
