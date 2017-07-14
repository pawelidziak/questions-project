/**
 * Created by pawel.idziak on 08.07.2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class AppService {

  private _firstView = true;
  private _queryString: string;
  private _lastTimeDiscussed: Date;

  constructor() {
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
}
