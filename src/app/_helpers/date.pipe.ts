/**
 * Created by pawel.idziak on 07.07.2017.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipe implements PipeTransform {
  transform(input: string) {
    if (input) {

      const tmp = input.split('.');
      const tmp1 = tmp[0];
      tmp[0] = tmp[1];
      tmp[1] = tmp1;
      const newDate = tmp[0] + '-' + tmp[1] + '-' + tmp[2];

      const now = new Date();
      const date = new Date(newDate);
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

      const diffDays = (Math.floor((now.getTime() - date.getTime()) / (oneDay)));

      if (diffDays === 0) {
        return 'today';
      }
      if (diffDays === 1) {
        return 'yesterday';
      }
      if (diffDays === 2) {
        return 'two days';
      }
      if (diffDays === 3) {
        return 'three days';
      }
      return input;
    }
  }
}
