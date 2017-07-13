/**
 * Created by pawel.idziak on 04.07.2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {IQuestion} from '../_classes/Question';

@Injectable()
export class QuestionsService {

  constructor(private _http: Http) { }

  // getQuestions(): Observable<IQuestion[]> {
  //   return this._http
  //     .get('././assets/questions.json')
  //     .map((response: Response) => <IQuestion[]> response.json())
  //     .catch(this.handleError);
  // }
  //
  // getQuestion(id: number): Observable<IQuestion> {
  //   return this.test()
  //     .map((questions: IQuestion[]) => questions.find(question => question.id === id))
  // }

  private handleError(error: Response) {
    console.error(error);
    const message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }

  getQuestions(): Observable<IQuestion[]> {
    return this._http
      .get('/api/questions')
      .map((res: Response) => <IQuestion[]> res.json())
      .catch(this.handleError);
  }

  getQuestion(id: number): Observable<IQuestion> {
    return this._http
      .post('/api/question', id)
      .map((res: Response) => <IQuestion> res.json())
      .catch(this.handleError);
  }

  getHottestDiscussion(): Observable<IQuestion> {
    return this._http
      .get('/api/hot-discussion')
      .map((res: Response) => <IQuestion> res.json())
      .catch(this.handleError);
  }
}
