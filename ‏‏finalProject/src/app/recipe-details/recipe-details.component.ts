import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Resipe } from 'src/models/Resipe';
import { ResipeService } from '../resipe.service';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy{
  
  ind:number;
  item:number;
  theResipe:Resipe;
  subId:Subscription;
  getI:Subscription;
  str=localStorage.getItem("currentSurfer");
  userNow=JSON.parse(this.str)
  renoveI:Subscription;
  ngOnInit(): void {
    console.log(this.theResipe);
  }

  constructor(public act:ActivatedRoute, public servRes:ResipeService,public router:Router) {
   this.subId=  this.act.params.subscribe((succ)=>{
    this.ind=succ.id;
    this.getI= this.servRes.getItem(this.ind-1).subscribe((suc)=>{
    this.theResipe=suc
    if(suc)
    return suc.idResipe
  return null} )
   } )
  }
  deleteI(){
    alert("מוחק מתכון זה")
    this.renoveI= this.servRes.deleteItem(this.theResipe.idResipe-1).subscribe(succ=>{
      console.log(succ)
      this.router.navigate(['/allResipes']) 
    },
    faill=>{
      console.log(faill)
    } )
       
  }
  
  ngOnDestroy(): void {
    if(this.subId)
    this.subId.unsubscribe();
    if(this.getI)
    this.subId.unsubscribe();
  }
}

  



