import { Injectable } from '@angular/core';
import { Kategoryot } from 'src/models/Kategoryot';


@Injectable({
  providedIn: 'root'
})
export class KategoryService {
 arr:{id:number,name:string,srcI:string}[]=[{id: 2,name:"עוף ובשר",srcI:"https://www.10dakot.co.il/wp-content/uploads/2017/07/%D7%9B%D7%A0%D7%A4%D7%99%D7%99%D7%9D-%D7%91%D7%AA%D7%A0%D7%95%D7%A8.jpg"} ]
  constructor() { }
}
