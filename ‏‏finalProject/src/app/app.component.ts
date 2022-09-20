import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResipeService } from './resipe.service';
import { WhatFilteringService } from './what-filtering.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'finalProject';
  savesubscribe:Subscription
  nameFilt:string;
  timeFilt:number;
  hasName=localStorage.getItem("currentSurfer");
  strPars=JSON.parse(this.hasName)
  ngOnInit(): void {
    this.savesubscribe=  this.resServe.getResipes().subscribe(
      succes => {
        this.resServe.arr = succes;
        console.log(succes)
      },
      err => {
        console.log(err)
        
      }
    )
  }
  constructor(public resServe: ResipeService, public routList:Router,public whatFilt:WhatFilteringService) {}
    
  routToListWithName(){
    console.log(this.nameFilt)
    this.routList.navigate([ "/allResipes"]);
    this.whatFilt.nameF.next(this.nameFilt)
  }

  routToListWithTime(){
   console.log(this.timeFilt)
   if(this.timeFilt==0)
   this.routList.navigate([ "/allResipes"]);
   else
   this.routList.navigate(["/recipesByTime"])
   this.whatFilt.timeF.next(this.timeFilt)
  }
  logOut(){
    localStorage.removeItem("currentSurfer")
    this.routList.navigate(['/home']) 
  }
  ngOnDestroy(): void {
    if(this.savesubscribe)
    this.savesubscribe.unsubscribe();
  }
}
