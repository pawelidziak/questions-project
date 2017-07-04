import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SingleQuestionComponent } from './single-question/single-question.component';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import {QuestionsService} from './questions-list/questions-list.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingleQuestionComponent,
    ProfileModalComponent,
    QuestionsListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
