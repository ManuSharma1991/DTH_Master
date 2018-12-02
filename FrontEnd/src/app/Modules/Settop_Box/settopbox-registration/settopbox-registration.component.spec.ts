import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettopboxRegistrationComponent } from './settopbox-registration.component';

describe('SettopboxRegistrationComponent', () => {
  let component: SettopboxRegistrationComponent;
  let fixture: ComponentFixture<SettopboxRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettopboxRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettopboxRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
