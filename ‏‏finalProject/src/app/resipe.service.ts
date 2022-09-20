import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'e2e/src/models/Recipe';
import { Observable } from 'rxjs';
import { Resipe } from 'src/models/Resipe';

@Injectable({
  providedIn: 'root'
})
export class ResipeService {
  baseUrl = "https://localhost:44320/api/";
  arr: Resipe[];
  constructor(private myServe: HttpClient) {

   }
  getResipes() {
    return this.myServe.get<Resipe[]>(this.baseUrl + "Resipe")
  }
  getItem(id:number){
    return this.myServe.get<Resipe>(this.baseUrl+"Resipe?id="+id)
  }
  postItem(res: Resipe) {
    return this.myServe.post<Resipe>(this.baseUrl + "Resipe", res)
  }
  putItem(res: Resipe,id:number){
    return this.myServe.put<Resipe>(this.baseUrl + "Resipe?="+id, res)
  }
  deleteItem(id:number){
    return this.myServe.delete<Resipe>(this.baseUrl+"Resipe?id="+id)
  }
}
