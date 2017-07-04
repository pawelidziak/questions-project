import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SingleQuestionComponent } from './single-question/single-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingleQuestionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
