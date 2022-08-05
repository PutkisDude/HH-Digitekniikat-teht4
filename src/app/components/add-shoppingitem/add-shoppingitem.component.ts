import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-shoppingitem',
  templateUrl: './add-shoppingitem.component.html',
  styleUrls: ['./add-shoppingitem.component.css']
})
export class AddShoppingitemComponent implements OnInit {
  @Output() addItem: EventEmitter<any> = new EventEmitter();

  name: string;
  amount: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const item = {
      name: this.name,
      amount: this.amount
    }
    this.addItem.emit(item);
  }
}
