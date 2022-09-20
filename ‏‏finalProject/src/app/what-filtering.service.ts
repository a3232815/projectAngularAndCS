import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatFilteringService {
nameF=new Subject<string>();
timeF=new Subject<number>();
nameFilt:string;
  constructor() { }
}
