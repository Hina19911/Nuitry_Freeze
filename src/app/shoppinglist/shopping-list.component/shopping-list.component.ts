import { Component } from '@angular/core';
import { ShoppingEditComponent } from '../shopping-edit.component/shopping-edit.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent,CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  shoppingItems = [
    { name: 'Tomatoes', quantity: 5 },
    { name: 'Apples', quantity: 10 },
    { name: 'Rice', quantity: '1 kg' }
  ];
}
