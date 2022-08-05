import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoppingitemComponent } from './add-shoppingitem.component';

describe('AddShoppingitemComponent', () => {
  let component: AddShoppingitemComponent;
  let fixture: ComponentFixture<AddShoppingitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShoppingitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShoppingitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
