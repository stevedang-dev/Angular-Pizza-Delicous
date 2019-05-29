import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurChefCardComponent } from './about-our-chef-card.component';

describe('AboutOurChefCardComponent', () => {
  let component: AboutOurChefCardComponent;
  let fixture: ComponentFixture<AboutOurChefCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOurChefCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOurChefCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
