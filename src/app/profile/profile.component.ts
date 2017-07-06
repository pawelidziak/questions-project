import {Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from './modal/modal.component';
import {IUser} from '../_classes/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {

  @Input('user') user: IUser;

  constructor(private modalService: NgbModal) {
  }

  openProfileModal() {
    const modalRef = this.modalService.open(ModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.user = this.user;
  }
}
