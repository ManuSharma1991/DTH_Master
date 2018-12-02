import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelRegistrationComponent } from './channel-registration.component';

describe('ChannelRegistrationComponent', () => {
  let component: ChannelRegistrationComponent;
  let fixture: ComponentFixture<ChannelRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
