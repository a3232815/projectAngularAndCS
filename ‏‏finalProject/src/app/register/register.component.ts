import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/models/User';
import { NgModule } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnChanges {
  theUser: User = new User(null, null, null, null, null)
  nowUse: any;
  resultAdd: string;
  currectUser: Subscription;
  name: string;
  password:string;
  constructor(public ueserServe: UserService) {

  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {
    this.name=this.ueserServe.nameTo;
    this.password=this.ueserServe.passwordTo;
    this.theUser.name=this.name;
    this.theUser.password=this.password;
  }
  f(regForm: any) {
    console.log(regForm)
    console.log(this.theUser)

    return this.ueserServe.addItem(this.theUser).subscribe((suc => {
      alert(suc);

      this.currectUser = this.ueserServe.getItemByNameAndPassword(this.theUser.name, this.theUser.password).subscribe(
        (succ) => {
          // alert(suc);
          this.nowUse = succ
          console.log(this.nowUse)
          localStorage.setItem("currentSurfer", JSON.stringify(this.nowUse))
        }

      )
    }))
  }


}
