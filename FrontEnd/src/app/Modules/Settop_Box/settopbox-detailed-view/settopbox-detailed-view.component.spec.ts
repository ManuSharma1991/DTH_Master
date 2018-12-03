import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettopboxDetailedViewComponent } from './settopbox-detailed-view.component';

describe('SettopboxDetailedViewComponent', () => {
  let component: SettopboxDetailedViewComponent;
  let fixture: ComponentFixture<SettopboxDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettopboxDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettopboxDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
