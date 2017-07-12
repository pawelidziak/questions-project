/**
 * Created by pawel.idziak on 11.07.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import {IUser} from '../_classes/User';

@Injectable()
export class UsersService {

  constructor(private _http: Http) {
  }

  getUsersWithSamePeriod(date: Date): Observable<IUser> {
    return this._http
      .get('././assets/users.json')
      .mergeMap((response: Response) => response.json())
      .filter((user: IUser) => Math.abs(date.getTime() - new Date(user.memberFor).getTime()) <= 604800000)
      .map((person: IUser) => person)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    const message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }
}
