import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMenuCardContainerComponent } from './our-menu-card-container.component';

describe('OurMenuCardContainerComponent', () => {
  let component: OurMenuCardContainerComponent;
  let fixture: ComponentFixture<OurMenuCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurMenuCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMenuCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
