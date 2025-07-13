import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recipe-items',
  imports: [CommonModule],
  templateUrl: './recipe-items.component.html',
  styleUrl: './recipe-items.component.scss'
})
export class RecipeItemsComponent implements OnInit {
  shoppingItems = [
    { name: 'Tomatoes', quantity: 5 },
    { name: 'Apples', quantity: 10 },
    { name: 'Rice', quantity: '1 kg' }
  ];
  
  constructor() { }

  ngOnInit() {
  }
}
