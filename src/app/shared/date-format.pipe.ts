import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormat implements PipeTransform {
  transform(value: string): string {
      let Y = value.slice(0, 4); 
      let M = value.slice(4, 6); 
      let D = value.slice(6, 8); 
     
      return D + '/' + M + '/' + Y ;
   
  }
}
