import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorRegistrationComponent } from './distributor-registration.component';

describe('DistributorRegistrationComponent', () => {
  let component: DistributorRegistrationComponent;
  let fixture: ComponentFixture<DistributorRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
