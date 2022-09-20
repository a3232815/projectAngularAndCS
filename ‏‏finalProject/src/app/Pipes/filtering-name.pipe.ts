import { Pipe, PipeTransform } from '@angular/core';
import { Resipe } from 'src/models/Resipe';

@Pipe({
  name: 'filteringName'
})
export class FilteringNamePipe implements PipeTransform {

  transform(arr:Resipe[], filedStr:string): Resipe[] {
    let c=[];
   for (let i = 0; i < arr.length && arr[i]!=undefined ; i++) {
      if(arr[i].nameResipe.includes(filedStr) ){
        c.push(arr[i])
      }   
   }
    return c;
  }

}
