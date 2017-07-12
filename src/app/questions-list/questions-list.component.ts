import {Component, OnInit} from '@angular/core';
import {IQuestion} from '../_classes/Question';
import {QuestionsService} from '../_services/questions-list.service';
import {AppService} from '../_services/app.service';

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
