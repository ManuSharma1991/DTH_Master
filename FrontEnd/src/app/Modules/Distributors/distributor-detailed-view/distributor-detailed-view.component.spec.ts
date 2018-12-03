import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorDetailedViewComponent } from './distributor-detailed-view.component';

describe('DistributorDetailedViewComponent', () => {
  let component: DistributorDetailedViewComponent;
  let fixture: ComponentFixture<DistributorDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
