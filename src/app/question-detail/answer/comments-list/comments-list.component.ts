import {Component, Input, OnInit} from '@angular/core';
import {IResponse} from '../../../_classes/Response';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.sass']
})
export class CommentsListComponent implements OnInit {

  @Input('comments') comments: IResponse[];

  constructor() { }

  ngOnInit() {
  }

}
