import {Component, Input, OnInit} from '@angular/core';
import {IQuestion} from '../../_classes/Question';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';
import {QuestionsService} from '../questions-list.service';
import {IAnswer} from '../../_classes/Answer';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.sass']
})
export class QuestionDetailComponent implements OnInit {

  question: IQuestion;
  errorMessage: any;

  answersArray: IAnswer[];
  commentsArray: IAnswer[];

  private sub: Subscription;

  constructor(private _route: ActivatedRoute, private _questionsService: QuestionsService) {
  }

  ngOnInit() {
    this.answersArray = [];
    this.commentsArray = [];
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
          this.filterResponses();
        },
        error => {
          this.errorMessage = <any>error;
        });
  }

  filterResponses(): void {
    for (const response of this.question.answers) {
      this.answersArray.push(response);
    }
    console.log(this.question);
    console.log(this.answersArray);
  }
}
