import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {IUser} from '../../_classes/User';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input('user') user: IUser;
  user1: IUser = {
    name: 'Test',
    memberFor: new Date(),
    lastSeen: new Date,
    peers: 10,
    discussions: 15,
    findings: 20,
    questions: 25,
    avatarUrl: 'assets/avatars/2.png'
  };

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  private openNextProfileModal() {
    const modalRef = this.modalService.open(ModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.user = this.user1;
  }

  closeAndOpen() {
    this.activeModal.close();
    this.openNextProfileModal();
  }
}
