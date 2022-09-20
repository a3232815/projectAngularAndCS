import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'e2e/src/models/User';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  userPassword: string;
  nowUse: User;
  currectUser: Subscription;
  constructor(public userServe: UserService, public router: Router) { }
  ngOnInit(): void {
    
  }
  
  updateUser(form) {
    console.log(form)
    console.log(this.userName)
    this.currectUser = this.userServe.getItemByNameAndPassword(this.userName, this.userPassword).subscribe(
      (succ) => {
        this.nowUse = succ
        if (this.nowUse == null) {
          console.log(this.userName)
          alert(this.userName)
          this.userServe.nameTo=this.userName;
          this.userServe.passwordTo=this.userPassword;
          // this.userServe.nameUser.next(this.userName)
          this.router.navigate(['/register'])
        }
        console.log(this.nowUse)
        localStorage.setItem("currentSurfer", JSON.stringify(this.nowUse))
        if (this.nowUse != null)
          this.router.navigate(['/home'])
      },

    )
  }
  ngOnDestroy(): void {
    if (this.currectUser)
      this.currectUser.unsubscribe;
  }

}
