import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVideoManagementComponent } from './admin-video-management.component';

describe('AdminVideoManagementComponent', () => {
  let component: AdminVideoManagementComponent;
  let fixture: ComponentFixture<AdminVideoManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVideoManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVideoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
