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
import {AnswerComponent} from './question-detail/answer/answer.component';
import {PipeModule} from '../_helpers/pipes/pipe.module';
import {CommentComponent} from './question-detail/answer/comments-list/comment/comment.component';
import {NgbModule, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import {CommentsListComponent} from './question-detail/answer/comments-list/comments-list.component';

@NgModule({
  declarations: [QuestionsListComponent, SingleQuestionComponent, QuestionDetailComponent, AnswerComponent,
    CommentComponent, CommentsListComponent],
  imports: [CommonModule, RouterModule, ProfileModule, PipeModule, NgbModule],
  exports: [QuestionsListComponent],
  providers: [QuestionsService, NgbTooltipConfig],

})
export class QuestionsListModule {
}
