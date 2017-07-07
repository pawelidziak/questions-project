import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { QuestionsListModule } from './questions-list/questions-list.module';
import {routing} from './app.routing';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    routing,
    RouterModule,
    QuestionsListModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
