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

  errorMessage: string;
  loading: boolean;
  loadMore: boolean;

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
          this._appService.questions = questions;
          this._appService.sliceArray();
          this.loading = false;
        },
        error => {
          this.errorMessage = <any>error;
          this.loading = false;
        });
  }

  displayAll() {
    this.loadMore = true;
    console.log(this.loadMore);
  }

}
