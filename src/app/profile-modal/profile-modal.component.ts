import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../_classes/User';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.sass']
})
export class ProfileModalComponent implements OnInit {

  @Input('user') user: IUser;

  constructor() {
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-profile-modal2',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.sass']
})
export class ProfileModal2Component implements OnInit {

  @Input('user') user: IUser;

  constructor() {
  }

  ngOnInit() {
  }
}
