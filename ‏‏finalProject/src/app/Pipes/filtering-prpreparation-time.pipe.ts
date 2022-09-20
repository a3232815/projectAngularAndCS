import { Pipe, PipeTransform } from '@angular/core';
import { Resipe } from 'src/models/Resipe';

@Pipe({
  name: 'filteringPrpreparationTime'
})
export class FilteringPrpreparationTimePipe implements PipeTransform {

  transform(arr:Resipe[], field:number): Resipe[] {
    let c=[];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].preparationTime==field)
      c.push(arr[i])
    }
    return c;
  }

}
