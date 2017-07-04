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
    // const user = new User('Piotr', new Date(), new Date(), 4, 5, 6, 7);
    // const q = new Question(1, 'test', user);
    // this.questions.push(q);
    // console.log(this.questions);
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
