import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AddResipeComponent } from './add-resipe/add-resipe.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import {HttpClientModule} from '@angular/common/Http';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { DifficultyLevelPipe } from './Pipes/level-of-difficalty.pipe';
import { RoundNumberPipe } from './Pipes/RoundNumberPipe';
import { FilteringNamePipe } from './Pipes/filtering-name.pipe';
import { FilteringKategoryPipe } from './Pipes/filtering-kategory.pipe';
import { FilteringPrpreparationTimePipe } from './Pipes/filtering-prpreparation-time.pipe';
import { HomeComponent } from './home/home.component';
import { ResipeService } from './resipe.service';
import { KategoryService } from './kategory.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListByTimePrepartionComponent } from './list-by-time-prepartion/list-by-time-prepartion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailsComponent,
    AddResipeComponent,
    ListComponent,
    SmallRecipeComponent,
    DifficultyLevelPipe,
    RoundNumberPipe,
    FilteringNamePipe,
    FilteringKategoryPipe,
    FilteringPrpreparationTimePipe,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ListByTimePrepartionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
