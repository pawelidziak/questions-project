/**
 * Created by pawel.idziak on 08.07.2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class AppService {

  private _firstView = true;
  private _queryString: string;

  constructor(private _http: Http) {
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
}
