import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveMapContactComponent } from './interactive-map-contact.component';

describe('InteractiveMapContactComponent', () => {
  let component: InteractiveMapContactComponent;
  let fixture: ComponentFixture<InteractiveMapContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveMapContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveMapContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
