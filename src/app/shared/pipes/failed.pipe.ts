import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'failed'
})
export class FailedPipe implements PipeTransform {

  transform(arr:any): number {
    return arr.filter((e:any)=>e.probability_status.split('').slice(0,2).join('')<50).length
  }

}
