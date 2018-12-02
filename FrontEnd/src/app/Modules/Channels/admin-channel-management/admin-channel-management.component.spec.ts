import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChannelManagementComponent } from './admin-channel-management.component';

describe('AdminChannelManagementComponent', () => {
  let component: AdminChannelManagementComponent;
  let fixture: ComponentFixture<AdminChannelManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChannelManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChannelManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
