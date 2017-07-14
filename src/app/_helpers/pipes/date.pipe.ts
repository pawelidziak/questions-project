/**
 * Created by pawel.idziak on 07.07.2017.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myDatePipe'
})
export class MyDatePipe implements PipeTransform {
  transform(input: any) {
    if (input) {
      // date format dd - MM - YYYY (and I changed it to MM - dd - YYY)
      // const tmp = input.split('.');
      // const tmp1 = tmp[0];
      // tmp[0] = tmp[1];
      // tmp[1] = tmp1;
      // const newDate = tmp[0] + '-' + tmp[1] + '-' + tmp[2];

      const now = new Date();
      const date = new Date(input);
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

      const diffDays = (Math.floor((now.getTime() - date.getTime()) / (oneDay)));


      if (diffDays < 7) {
        switch (diffDays) {
          case 0:
            return 'today';
          case 1:
            return 'yesterday';
          case 2:
            return 'two days';
          case 3:
            return 'three days';
          case 4:
            return 'four days';
          case 5:
            return 'five days';
          case 6:
            return 'six days';
        }

      }
      // week/s
      if (diffDays === 7) {
        return 'one week';
      }
      if (diffDays > 7 && diffDays < 30) {
        return Math.floor(diffDays / 7) + ' weeks';
      }

      // month/s
      if (diffDays === 30) {
        return 'one months';
      }
      if (diffDays > 30) {
        return Math.floor(diffDays / 30) + ' months';
      }

      // year/s
      if (diffDays === 365) {
        return 'one year';
      }
      if (diffDays > 365) {
        return Math.floor(diffDays / 365) + ' years';
      }

      return input;
    }
  }
}
