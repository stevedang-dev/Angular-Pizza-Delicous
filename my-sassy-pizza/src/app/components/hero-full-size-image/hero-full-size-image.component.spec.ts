import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFullSizeImageComponent } from './hero-full-size-image.component';

describe('HeroFullSizeImageComponent', () => {
  let component: HeroFullSizeImageComponent;
  let fixture: ComponentFixture<HeroFullSizeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFullSizeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFullSizeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
