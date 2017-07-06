import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SingleQuestionComponent } from './questions-list/single-question/single-question.component';
import { ProfileModalComponent, ProfileModal2Component } from './profile-modal/profile-modal.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import {QuestionsService} from './questions-list/questions-list.service';
import { HttpModule } from '@angular/http';
import { ProfileComponent } from './profile/profile.component';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalStack} from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { ModalComponent } from './profile/modal/modal.component';
import {ProfileModule} from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingleQuestionComponent,
    ProfileModalComponent,
    QuestionsListComponent,
    ProfileModal2Component
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ProfileModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent],

})
export class AppModule { }
