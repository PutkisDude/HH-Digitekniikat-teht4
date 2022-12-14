import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingitemComponent } from './shoppingitem.component';

describe('ShoppingitemComponent', () => {
  let component: ShoppingitemComponent;
  let fixture: ComponentFixture<ShoppingitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
