import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPromoComponent } from './pizza-promo.component';

describe('PizzaPromoComponent', () => {
  let component: PizzaPromoComponent;
  let fixture: ComponentFixture<PizzaPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
