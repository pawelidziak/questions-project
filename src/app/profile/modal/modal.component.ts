import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {IUser} from '../../_classes/User';
import {UsersService} from '../../_services/users.service';
import {QuestionsService} from '../../_services/questions.service';
import {IQuestion} from '../../_classes/Question';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input('user') user: IUser;

  usersWithSamePeriod: IUser[];
  hottestDiscussion: IQuestion;

  loading: boolean;

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal, private _usersService: UsersService,
              private _questionsService: QuestionsService) {
  }

  ngOnInit() {
    this.usersWithSamePeriod = [];
    // this.getUsersWithSamePeriod(new Date(this.user.memberFor));
    this.getUserConnections(this.user);
    this.getHottestDiscussion();
  }

  private openNextProfileModal(user: IUser) {
    const modalRef = this.modalService.open(ModalComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.user = user;
  }

  closeAndOpen(user: IUser) {
    this.closeModal();
    this.openNextProfileModal(user);
  }

  closeModal(): void {
    this.activeModal.close();
  }

  private getUserConnections(user: IUser) {
    this.loading = true;
    this._usersService.getUserConnections(user)
      .subscribe((data) => {
        this.usersWithSamePeriod = data;
        this.loading = false;
      });
  }

  private getHottestDiscussion() {
    this.loading = true;
    this._questionsService.getHottestDiscussion()
      .subscribe((data) => {
        this.hottestDiscussion = data;
        this.loading = false;
      });
  }
}
