import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'difLevel'
})
export class DifficultyLevelPipe implements PipeTransform {

  transform(n:number): string {
   let s:string;
   s="";
   for (let index = 0; index <n; index++) {
     s+="*";
   }
    return s;

  }

}
