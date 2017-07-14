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

  getUserConnections(user: IUser): Observable<IUser[]> {
    return this._http
      .post('/api/user-connection', user)
      .map((res: Response) => <IUser[]> res.json())
      .catch(this.handleError);

  }
  private handleError(error: any) {
    return Observable.throw(error);
  }

}
