import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerDetailedViewComponent } from './retailer-detailed-view.component';

describe('RetailerDetailedViewComponent', () => {
  let component: RetailerDetailedViewComponent;
  let fixture: ComponentFixture<RetailerDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
