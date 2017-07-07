/**
 * Created by pawel.idziak on 07.07.2017.
 */
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuestionsListComponent} from './questions-list/questions-list.component';
import {QuestionDetailComponent} from './question-detail/question-detail.component';

const routes: Routes = [
  {
    path: 'main',
    component: QuestionsListComponent
  },
  {
    path: 'cos',
    component: QuestionDetailComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
