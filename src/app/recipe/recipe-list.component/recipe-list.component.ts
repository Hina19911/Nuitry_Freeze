import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemsComponent } from "../recipe-items.component/recipe-items.component";
import{Recipe} from "../../models/recipe.model"
@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItemsComponent,CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit {
recipe:Recipe []=[
  new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  new Recipe('A Test Recipe', 'This is simply a test', 'https://i.pinimg.com/736x/ae/c4/b1/aec4b1a59b7165562698470ce91494be.jpg')
  
];

constructor(){

}
ngOnInit(): void {
    
}
}
