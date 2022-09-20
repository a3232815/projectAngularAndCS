import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"roundNumber"
})
export class RoundNumberPipe implements PipeTransform{
    transform(value: number):string {
        if(value%1!=0)
        return value+" שעות"
       var hour:string=value/60+"";
        if(value<60)
        return value+" דקות ";
        if(value%60>0)
         return hour.slice(0,1)+" שעות ו- "+value%60+" דקות"
        return hour.slice(0,1)+" שעות"
    }
}