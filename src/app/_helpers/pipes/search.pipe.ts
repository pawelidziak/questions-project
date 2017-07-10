/**
 * Created by pawel.idziak on 09.07.2017.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'SearchPipe',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, input: string) {

    if (input === undefined || input === '') {
      return value;
    }

    if (value && input) {
      return value.filter(item => {
        return (item.title.toLowerCase().includes(input.toLowerCase()));
      })
    }
    
  }
}


