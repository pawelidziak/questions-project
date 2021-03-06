/**
 * Created by pawel.idziak on 06.07.2017.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {ModalComponent} from './modal/modal.component';
import {NgbModule, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalStack} from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import {PipeModule} from '../_helpers/pipes/pipe.module';
import {UsersService} from '../_services/users.service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ProfileComponent, ModalComponent],
  imports: [CommonModule, NgbModule, PipeModule, RouterModule],
  exports: [ProfileComponent, ModalComponent],
  providers: [NgbModalStack, NgbTooltipConfig, UsersService],
  entryComponents: [ModalComponent]
})
export class ProfileModule { }
