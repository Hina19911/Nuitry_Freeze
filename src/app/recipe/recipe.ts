import { Component } from '@angular/core';
import { RecipeListComponent } from './recipe-list.component/recipe-list.component';
import { RecipeDetails } from './recipe-details.component/recipe-details.component';

@Component({
  selector: 'app-recipe',
  standalone: true, //
  imports: [RecipeListComponent,RecipeDetails ],
  templateUrl: './recipe.html',
  styleUrl: './recipe.scss'
})
export class Recipe {

}
