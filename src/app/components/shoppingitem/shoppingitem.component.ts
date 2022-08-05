import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { ShoppingItem } from 'src/app/models/Shopping';

@Component({
  selector: 'app-shoppingitem',
  templateUrl: './shoppingitem.component.html',
  styleUrls: ['./shoppingitem.component.css']
})
export class ShoppingitemComponent implements OnInit {
  @Input() shoppingItem: ShoppingItem;
  @Output() deleteShopping: EventEmitter<ShoppingItem> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item: ShoppingItem) {
    this.deleteShopping.emit(item);
  }
}
