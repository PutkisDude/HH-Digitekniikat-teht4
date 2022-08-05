import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from 'src/app/models/Shopping';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  shoppingItems: ShoppingItem[];

  constructor() { }

  ngOnInit(): void {
    this.shoppingItems = [
      { id: 1, name: 'Bananas', amount: '2pcs' },
      { id: 2, name: 'Juice', amount: '1L' }
    ]
  }

  addItem(item: ShoppingItem) {
    this.shoppingItems.push(item);
  }

  deleteItem(item: ShoppingItem) {
    this.shoppingItems = this.shoppingItems.filter(t => t.id != item.id);
  }
}
