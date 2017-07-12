import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {IUser} from '../../_classes/User';
import {UsersService} from '../../_services/users.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input('user') user: IUser;

  usersWithSamePeriod: IUser[];

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _usersService: UsersService) {
  }

  ngOnInit() {
    this.usersWithSamePeriod = [];
    this.getUsersWithSamePeriod(new Date(this.user.memberFor));
  }

  private openNextProfileModal(user: IUser) {
    const modalRef = this.modalService.open(ModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.user = user;
  }

  closeAndOpen(user: IUser) {
    this.activeModal.close();
    this.openNextProfileModal(user);
  }

  private getUsersWithSamePeriod(date: Date) {
    this._usersService.getUsersWithSamePeriod(date)
      .subscribe((data) => {
        if (this.usersWithSamePeriod.length <= 2) {
          this.usersWithSamePeriod.push(data);
        }
      });
  }
}
