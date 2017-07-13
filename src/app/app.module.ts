import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import { QuestionsListModule } from './questions-list/questions-list.module';
import { routing } from './app.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {PipeModule} from './_helpers/pipes/pipe.module';
import {AppService} from './_services/app.service';
import {MockBackend} from '@angular/http/testing';
import {fakeBackendProvider} from './_helpers/fake-backend/fake-backend';

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
    QuestionsListModule,
    FormsModule,
    PipeModule
  ],
  providers: [AppService,
    fakeBackendProvider, MockBackend, BaseRequestOptions ],
  bootstrap: [AppComponent],

})
export class AppModule { }
