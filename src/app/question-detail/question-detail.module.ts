/**
 * Created by pawel.idziak on 12.07.2017.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionDetailComponent} from './question-detail.component';
import {AnswerComponent} from './answer/answer.component';
import {CommentComponent} from './answer/comments-list/comment/comment.component';
import {CommentsListComponent} from './answer/comments-list/comments-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ProfileModule} from '../profile/profile.module';
import {PipeModule} from '../_helpers/pipes/pipe.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [QuestionDetailComponent, AnswerComponent, CommentComponent, CommentsListComponent],
  imports: [CommonModule, NgbModule, ProfileModule, PipeModule, RouterModule],
  exports: [QuestionDetailComponent],
  providers: [],

})
export class QuestionDetailModule {
}
