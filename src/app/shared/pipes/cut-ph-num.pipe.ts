import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutPhNum'
})
export class CutPhNumPipe implements PipeTransform {

  transform(phone:string): any {
    return phone.split('').filter((e:any)=>Number(e)).slice(0,9).join('')
    
  }

}
