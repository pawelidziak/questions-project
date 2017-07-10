/**
 * Created by pawel.idziak on 07.07.2017.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'absolutePipe'
})
export class AbsolutePipe implements PipeTransform {
  transform(input: number) {

    if (input === 0) {
      return input;
    }
    return Math.abs(input);

  }
}
