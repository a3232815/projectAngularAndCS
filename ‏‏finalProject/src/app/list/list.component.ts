import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResipeService } from '../resipe.service';
import { WhatFilteringService } from '../what-filtering.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  filt: any = "";
  hasName = localStorage.getItem("currentSurfer");
  filtNow: Subscription;

  constructor(public resServe: ResipeService, private route: ActivatedRoute, public whatFilt: WhatFilteringService) { }

  ngOnInit(): void {
    this.filtNow = this.whatFilt.nameF.subscribe((succ) => {
      this.filt = succ;
    })
    console.log(this.hasName)
  }
  ngOnDestroy(): void {
    if (this.filtNow)
      this.filtNow.unsubscribe;
  }
}