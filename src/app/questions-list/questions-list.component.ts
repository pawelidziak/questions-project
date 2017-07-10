import {Component, OnInit} from '@angular/core';
import {QuestionsService} from './questions-list.service';
import {IQuestion} from '../_classes/Question';
import {IUser} from '../_classes/User';
import {AppService} from "../app.service";

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.sass']
})
export class QuestionsListComponent implements OnInit {

  questions: IQuestion[];
  errorMessage: string;
  test: any[];

  constructor(private _questionsService: QuestionsService, public _appService: AppService) {
  }

  ngOnInit() {
    this.getQuestions();
    this._appService.firstView = true;
    this.test = ['pawel', 'gawel', 'beata'];
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
