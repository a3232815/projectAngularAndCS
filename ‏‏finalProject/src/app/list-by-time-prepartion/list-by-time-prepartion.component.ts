import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// import { Resipe } from 'src/models/Resipe';
import { ResipeService } from '../resipe.service';
import { WhatFilteringService } from '../what-filtering.service';

@Component({
  selector: 'app-list-by-time-prepartion',
  templateUrl: './list-by-time-prepartion.component.html',
  styleUrls: ['./list-by-time-prepartion.component.scss']
})
export class ListByTimePrepartionComponent implements OnInit {

filtTime:Subscription;
 num:number;
 hasName=localStorage.getItem("currentSurfer");
  
constructor(public resServe: ResipeService,private route: ActivatedRoute, public whatFilt:WhatFilteringService) {}
 
  ngOnInit(): void {
     this.filtTime= this.whatFilt.timeF.subscribe((succ)=>{
      this.num=succ;
    })
  }
  ngOnDestroy(): void {
    if(this.filtTime)
    this.filtTime.unsubscribe;
  }

}
