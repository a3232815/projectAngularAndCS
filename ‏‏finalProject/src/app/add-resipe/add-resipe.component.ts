import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'e2e/src/models/User';
import { Subscription } from 'rxjs';
import { Resipe } from 'src/models/Resipe';
import { ResipeService } from '../resipe.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-add-resipe',
  templateUrl: './add-resipe.component.html',
  styleUrls: ['./add-resipe.component.scss']
})
export class AddResipeComponent implements OnInit ,OnDestroy{

  str=localStorage.getItem("currentSurfer");
  strPars=JSON.parse(this.str)
  theUser:User=new User(null,null,null,null)
  oneResipe:Resipe=new Resipe(null,null,null,null,null,new Date(),[""],[""],this.strPars.id);
  addI:Subscription;
  constructor(public resServ: ResipeService,public userServ:UserService, public router:Router ) { }

  ngOnInit(): void {
    
  }
  add(n){
    console.log(n)
    this.oneResipe.preparation.splice(this.oneResipe.preparation.length-1,1)
    this.oneResipe.components.splice(this.oneResipe.components.length-1,1)
    this.addI= this.resServ.postItem(this.oneResipe).subscribe(succ=>{
      console.log(succ)
      alert("המתכון נוסף בהצלחה");
      this.router.navigate(['/allResipes'])    
    },
    faill=>{
      console.log(faill)
    } )
       
  }
  checkArrComponents(){
      this.oneResipe.components.forEach((element,index)=>{
        if(element=="")
        this.oneResipe.components.splice(index,1)
      })
      this.oneResipe.components.push("")
  }
  checkArrPreparation(){
    this.oneResipe.preparation.forEach((element,index)=>{
      if(element=="")
      this.oneResipe.preparation.splice(index,1)
    })
    this.oneResipe.preparation.push("")
}
  trackByIdC(index:number, obj:any){
    return index;
  }
  trackByIdP(index:number, obj:any){
    return index;
  }
  ngOnDestroy(): void {
    if(this.addI)
    this.addI.unsubscribe();
}

}
