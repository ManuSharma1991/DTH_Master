import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSettopboxManagementComponent } from './admin-settopbox-management.component';

describe('AdminSettopboxManagementComponent', () => {
  let component: AdminSettopboxManagementComponent;
  let fixture: ComponentFixture<AdminSettopboxManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettopboxManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettopboxManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
