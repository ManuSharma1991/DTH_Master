import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRegistrationComponent } from './video-registration.component';

describe('VideoRegistrationComponent', () => {
  let component: VideoRegistrationComponent;
  let fixture: ComponentFixture<VideoRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
