import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelDetailedViewComponent } from './channel-detailed-view.component';

describe('ChannelDetailedViewComponent', () => {
  let component: ChannelDetailedViewComponent;
  let fixture: ComponentFixture<ChannelDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
