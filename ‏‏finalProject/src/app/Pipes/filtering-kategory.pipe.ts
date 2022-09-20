import { newArray } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';
import { Resipe } from 'src/models/Resipe';

@Pipe({
  name: 'filteringKategory'
})
export class FilteringKategoryPipe implements PipeTransform {

  transform(arr: Resipe[], fieldNum: number): Resipe[] {
    let c=[];
   for (let i = 0; i < arr.length; i++) {
      if(arr[i].idKategory==fieldNum){
        c.push(arr[i])
      }   
   }
    return c;
  }


}
