import {Component, OnInit} from '@angular/core';
import {AppService} from '../_services/app.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  sortBySelected: string;
  constructor(public _appService: AppService, private _location: Location) {
  }

  ngOnInit() {
    this.sortBySelected = 'recent';
  }

  goBack() {
    this._location.back();
  }
}
