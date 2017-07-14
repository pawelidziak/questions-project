/**
 * Created by pawel.idziak on 07.07.2017.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuestionsListComponent} from './questions-list/questions-list.component';
import {QuestionDetailComponent} from './question-detail/question-detail.component';
import {Page404Component} from './page404/page404.component';

const routes: Routes = [
  {
    path: 'main',
    component: QuestionsListComponent
  },
  {
    path: ':user/:id',
    component: QuestionDetailComponent
  },
  {
    path: '404',
    component: Page404Component
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
