/**
 * Created by pawel.idziak on 04.07.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {IQuestion} from '../_classes/Question';

@Injectable()
export class QuestionsService {

  constructor(private _http: Http) {
  }

  getQuestions(): Observable<IQuestion[]> {
    return this._http
      .get('/api/questions')
      .map((res: Response) => <IQuestion[]> res.json())
      .catch(this.handleError);
  }

  getQuestion(id: number, user: string): Observable<IQuestion> {
    return this._http
      .post('/api/question', JSON.stringify({id, user}))
      .map((res: Response) => <IQuestion> res.json())
      .catch(this.handleError);
  }

  getHottestDiscussion(): Observable<IQuestion> {
    return this._http
      .get('/api/hot-discussion')
      .map((res: Response) => <IQuestion> res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    return Observable.throw(error);
  }

}
