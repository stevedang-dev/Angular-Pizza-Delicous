import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurChefComponent } from './about-our-chef.component';

describe('AboutOurChefComponent', () => {
  let component: AboutOurChefComponent;
  let fixture: ComponentFixture<AboutOurChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOurChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOurChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
