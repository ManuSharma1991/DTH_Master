import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDistributorManagementComponent } from './admin-distributor-management.component';

describe('AdminDistributorManagementComponent', () => {
  let component: AdminDistributorManagementComponent;
  let fixture: ComponentFixture<AdminDistributorManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDistributorManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDistributorManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
