import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPromoMenuComponent } from './content-promo-menu.component';

describe('ContentPromoMenuComponent', () => {
  let component: ContentPromoMenuComponent;
  let fixture: ComponentFixture<ContentPromoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPromoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPromoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
