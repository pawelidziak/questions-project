import {Component, OnInit} from '@angular/core';
import {IQuestion} from '../_classes/Question';
import {QuestionsService} from '../_services/questions.service';
import {AppService} from '../_services/app.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.sass']
})
export class QuestionsListComponent implements OnInit {

  questions: IQuestion[];
  errorMessage: string;

  loading: boolean;

  constructor(private _questionsService: QuestionsService, public _appService: AppService) {
  }

  ngOnInit() {
    this._appService.firstView = true;
    this.getQuestions();
  }

  getQuestions() {
    this.loading = true;
    this._questionsService.getQuestions()
      .subscribe(
        questions => {
          this.questions = questions;
          this.loading = false;
        },
        error => {
          this.errorMessage = <any>error;
          this.loading = false;
        });
  }

}
