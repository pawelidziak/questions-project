/**
 * Created by pawel.idziak on 06.07.2017.
 */
import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile.component';
import {ModalComponent} from './modal/modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalStack} from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';

@NgModule({
  declarations: [ProfileComponent, ModalComponent],
  imports: [NgbModule],
  exports: [ProfileComponent, ModalComponent],
  providers: [NgbModalStack],
  entryComponents: [ModalComponent]

})
export class ProfileModule { }
