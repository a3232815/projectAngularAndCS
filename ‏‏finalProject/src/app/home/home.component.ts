import { Component, OnInit } from '@angular/core';
import { ResipeService } from '../resipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  theResipes:boolean=false;
  theHome:boolean=true;
  filtKategory:number;
  hasName=localStorage.getItem("currentSurfer");
  arrOutResipe:{id:number,name:string,srcI:string}[]=[
    {id: 0,name:"מאפים",srcI:"https://www.10dakot.co.il/wp-content/uploads/2017/07/%E2%80%8F%E2%80%8FDSC_0089-%D7%A2%D7%95%D7%AA%D7%A7.jpg"},
    {id: 1,name:"סלטים",srcI:"https://www.10dakot.co.il/wp-content/uploads/2013/07/DSC_0006-%D7%A2%D7%95%D7%AA%D7%A7.jpg"},
    {id: 2,name:"עוף ובשר",srcI:"https://www.10dakot.co.il/wp-content/uploads/2017/07/%D7%9B%D7%A0%D7%A4%D7%99%D7%99%D7%9D-%D7%91%D7%AA%D7%A0%D7%95%D7%A8.jpg"},
    {id: 3,name:"תוספות",srcI:"https://www.10dakot.co.il/wp-content/uploads/2020/12/%E2%80%8F%E2%80%8F20201204_131703-%D7%A2%D7%95%D7%AA%D7%A7.jpg"},
    {id: 4,name:"מרקים",srcI:"https://www.10dakot.co.il/wp-content/uploads/2017/06/%E2%80%8F%E2%80%8FDSC_0260-%D7%A2%D7%95%D7%AA%D7%A7.jpg"},
    {id: 5,name:"חלבי",srcI:"https://www.10dakot.co.il/wp-content/uploads/2016/06/%E2%80%8F%E2%80%8FDSC_0062-%D7%A2%D7%95%D7%AA%D7%A7.jpg"},
  ]
  constructor(public resServe: ResipeService) { };
  ngOnInit(): void {
  }
  f(num:number){
    this.theHome=false;
    this.theResipes=true;
    this.filtKategory=num;   
  }

}
