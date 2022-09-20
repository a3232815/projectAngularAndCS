import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from 'e2e/src/models/User';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
nituv:string= "https://localhost:44320/api/User";
nameUser=new Subject<string>();
PasswordU= new Subject<string>();
nameTo:string;
passwordTo:string;
str=localStorage.getItem("currentSurfer");
nowUsing=JSON.parse(this.str)
  constructor(public userServe:HttpClient) { 
    
  }
  addItem(user:User){
    return this.userServe.post<User>( this.nituv,user)
  }
  getItem(use:User){
    return this.userServe.get<User>(this.nituv+"?value="+use)
  }
  getAllUser(){
    return this.userServe.get<User[]>(this.nituv)
  }
  getItemByNameAndPassword(nameU,passU){
    return this.userServe.get<User>(this.nituv+"?name="+nameU+"&password="+passU)
  }
}
