import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFactsComponent } from './restaurant-facts.component';

describe('RestaurantFactsComponent', () => {
  let component: RestaurantFactsComponent;
  let fixture: ComponentFixture<RestaurantFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
