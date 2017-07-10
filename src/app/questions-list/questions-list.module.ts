/**
 * Created by pawel.idziak on 07.07.2017.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionsListComponent} from './questions-list.component';
import {SingleQuestionComponent} from './single-question/single-question.component';
import {QuestionsService} from './questions-list.service';
import {ProfileModule} from '../profile/profile.module';
import {RouterModule} from '@angular/router';
import {QuestionDetailComponent} from './question-detail/question-detail.component';
import {AbsolutePipe} from '../_helpers/pipes/absolute.pipe';
import {AnswerComponent} from './question-detail/answer/answer.component';
import {DatePipe} from '../_helpers/pipes/date.pipe';
import {PipeModule} from '../_helpers/pipes/pipe.module';

@NgModule({
  declarations: [QuestionsListComponent, SingleQuestionComponent, QuestionDetailComponent, AnswerComponent],
  imports: [CommonModule, RouterModule, ProfileModule, PipeModule],
  exports: [QuestionsListComponent],
  providers: [QuestionsService],

})
export class QuestionsListModule { }
