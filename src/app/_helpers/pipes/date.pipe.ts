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
      // const tmp = input.split('-');
      // const tmp1 = tmp[0];
      // tmp[0] = tmp[1];
      // tmp[1] = tmp1;
      // const newDate = tmp[0] + '-' + tmp[1] + '-' + tmp[2];

      const now = new Date();
      const dateTime = new Date(input);
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

      const diffDays = (Math.floor((now.getTime() - dateTime.getTime()) / (oneDay)));


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
      if (diffDays >= 7 && diffDays < 14) {
        return 'one week ' + (Math.floor(diffDays - 7)) + ' days';
      }
      if (diffDays >= 14 && diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return weeks + ' weeks ' + (diffDays - Math.floor(weeks * 7)) + ' days';
      }

      // month/s
      if (diffDays === 30) {
        return 'one month';
      }
      if (diffDays >= 30 && diffDays < 60) {
        const months = Math.floor(diffDays / 30);
        return 'one month ' + (Math.floor(diffDays - 30)) + ' days';
      }
      if (diffDays >= 60 && diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return months + ' months ' + (diffDays - Math.floor(months * 30)) + ' days';
      }

      // year/s
      if (diffDays === 365) {
        return 'one month';
      }
      if (diffDays >= 365 && diffDays < 730) {
        const months = Math.floor(diffDays / 30);
        return 'one year ' + (Math.floor((diffDays - 365) / 30)) + ' months';
      }
      if (diffDays >= 730) {
        const years = Math.floor(diffDays / 365);
        return years + ' years ' + (diffDays - Math.floor((years - 365) / 30)) + ' months';
      }

      const tmp = input.split('/');
      const newDate = tmp[1] + '/' + tmp[0] + '/' + tmp[2];
      return newDate;
    }
  }
}
