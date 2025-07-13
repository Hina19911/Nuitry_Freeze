import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ApplicationModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Recipe } from './recipe/recipe';
import { RecipeListComponent } from './recipe/recipe-list.component/recipe-list.component';
import { RecipeItemsComponent } from './recipe/recipe-items.component/recipe-items.component';
import { RecipeDetails } from './recipe/recipe-details.component/recipe-details.component';
import { ShoppingListComponent } from './shoppinglist/shopping-list.component/shopping-list.component';
import { ShoppingEditComponent } from './shoppinglist/shopping-edit.component/shopping-edit.component';

@Component({
  selector: 'app-root',
  imports: [
  RouterOutlet,
  HeaderComponent,
  RouterModule,
  FooterComponent,
  Recipe,
RecipeListComponent,
RecipeItemsComponent,
RecipeDetails,
ShoppingListComponent,
ShoppingEditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected title = 'nuitryFreeze';
}
