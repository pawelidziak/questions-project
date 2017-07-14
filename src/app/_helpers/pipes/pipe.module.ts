/**
 * Created by pawel.idziak on 09.07.2017.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AbsolutePipe} from './absolute.pipe';
import {MyDatePipe} from './date.pipe';
import {SearchPipe} from './search.pipe';


@NgModule({
  declarations: [AbsolutePipe, MyDatePipe, SearchPipe],
  imports: [CommonModule],
  exports: [AbsolutePipe, MyDatePipe, SearchPipe],
  providers: [],

})
export class PipeModule { }
