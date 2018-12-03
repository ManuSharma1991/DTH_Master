import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetailedViewComponent } from './video-detailed-view.component';

describe('VideoDetailedViewComponent', () => {
  let component: VideoDetailedViewComponent;
  let fixture: ComponentFixture<VideoDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
