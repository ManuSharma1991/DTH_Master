import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOperatorManagementComponent } from './admin-operator-management.component';

describe('AdminOperatorManagementComponent', () => {
  let component: AdminOperatorManagementComponent;
  let fixture: ComponentFixture<AdminOperatorManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOperatorManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOperatorManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
