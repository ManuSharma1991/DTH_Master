import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRetailerManagementComponent } from './admin-retailer-management.component';

describe('AdminRetailerManagementComponent', () => {
  let component: AdminRetailerManagementComponent;
  let fixture: ComponentFixture<AdminRetailerManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRetailerManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRetailerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
