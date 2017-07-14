/**
 * Created by pawel.idziak on 08.07.2017.
 */
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {IQuestion} from '../_classes/Question';

@Injectable()
export class AppService {

  private _firstView = true;
  private _queryString: string;
  private _lastTimeDiscussed: Date;
  private _questions: IQuestion[];
  private _firstThreeQuestions: IQuestion[];
  private _restQuestions: IQuestion[];

  constructor() {
  }

  public sortArray(value: string) {
    switch (value) {
      case 'recent':
        this._questions.sort((a: IQuestion, b: IQuestion) => a.id - b.id);
        this.sliceArray();
        break;
      case 'hot':
        this._questions.sort((a: IQuestion, b: IQuestion) => b.conversations - a.conversations);
        this.sliceArray();
        break;
    }
  }

  sliceArray(): void {
    if (this._questions) {
      this._firstThreeQuestions = [];
      this._restQuestions = [];

      for (let i = 0; i < this._questions.length; i++) {
        if (i < 3) {
          this._firstThreeQuestions.push(this._questions[i]);
        } else {
          this._restQuestions.push(this._questions[i]);
        }
      }
    }
  }

  get queryString(): string {
    return this._queryString;
  }

  set queryString(value: string) {
    this._queryString = value;
  }

  get firstView() {
    return this._firstView;
  }

  set firstView(value) {
    this._firstView = value;
  }

  get lastTimeDiscussed(): Date {
    return this._lastTimeDiscussed;
  }

  set lastTimeDiscussed(value: Date) {
    this._lastTimeDiscussed = value;
  }

  get questions(): IQuestion[] {
    return this._questions;
  }

  set questions(value: IQuestion[]) {
    this._questions = value;
  }

  get firstThreeQuestions(): IQuestion[] {
    return this._firstThreeQuestions;
  }

  set firstThreeQuestions(value: IQuestion[]) {
    this._firstThreeQuestions = value;
  }

  get restQuestions(): IQuestion[] {
    return this._restQuestions;
  }

  set restQuestions(value: IQuestion[]) {
    this._restQuestions = value;
  }
}
