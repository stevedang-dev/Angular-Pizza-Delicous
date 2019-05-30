import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotMealMenuComponent } from './hot-meal-menu.component';

describe('HotMealMenuComponent', () => {
  let component: HotMealMenuComponent;
  let fixture: ComponentFixture<HotMealMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotMealMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotMealMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
