import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddResipeComponent } from './add-resipe/add-resipe.component';
import { HomeComponent } from './home/home.component';
import { ListByTimePrepartionComponent } from './list-by-time-prepartion/list-by-time-prepartion.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: "allResipes", component: ListComponent, },
  { path: "recipeDetail/:id", component: RecipeDetailsComponent },
  {path:"addRecipe",component:AddResipeComponent},
  {path:"recipesByTime",component:ListByTimePrepartionComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"",redirectTo:"/HomeComponent",pathMatch:"full",},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
