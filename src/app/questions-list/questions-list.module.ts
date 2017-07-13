/**
 * Created by pawel.idziak on 07.07.2017.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionsListComponent} from './questions-list.component';
import {SingleQuestionComponent} from './single-question/single-question.component';
import {ProfileModule} from '../profile/profile.module';
import {RouterModule} from '@angular/router';
import {NgbModule, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import {PipeModule} from '../_helpers/pipes/pipe.module';
import {QuestionsService} from '../_services/questions.service';
import {QuestionDetailModule} from '../question-detail/question-detail.module';

@NgModule({
  declarations: [QuestionsListComponent, SingleQuestionComponent],
  imports: [CommonModule, RouterModule, ProfileModule, PipeModule, NgbModule, QuestionDetailModule],
  exports: [QuestionsListComponent],
  providers: [QuestionsService, NgbTooltipConfig],

})
export class QuestionsListModule {
}
