import { Component, Input, OnInit } from '@angular/core';
import { Resipe } from 'src/models/Resipe';
import { ResipeService } from '../resipe.service';
// import { DifficultyLevelPipe } from '../Pipes/level-of-difficalty.pipe';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent  {
  constructor(public resServe: ResipeService) { }
  @Input()
  SmallRes:Resipe
}
