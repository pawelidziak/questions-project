import { Component, OnInit } from '@angular/core';
import {AppService} from '../_services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  sortBySelected: string;
  queryString: string;

  constructor(public _appService: AppService) { }

  ngOnInit() {
  }

}
