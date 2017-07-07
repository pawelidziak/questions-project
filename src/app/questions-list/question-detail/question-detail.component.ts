import {Component, Input, OnInit} from '@angular/core';
import {IQuestion} from '../../_classes/Question';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {QuestionsService} from '../questions-list.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.sass']
})
export class QuestionDetailComponent implements OnInit {

  question: IQuestion;
  errorMessage: any;

  private sub: Subscription;

  constructor(private _route: ActivatedRoute, private _questionsService: QuestionsService) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(
    params => {
      const id = params['id'];
      this.getQuestions(id);
    });
  }

  getQuestions(id: string) {
    this._questionsService.getQuestion(id)
      .subscribe(
        question => {
          this.question = question;
          console.log(this.question);
        },
        error => {
          this.errorMessage = <any>error;
        });
  }
}
