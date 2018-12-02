import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettopboxViewComponent } from './settopbox-view.component';

describe('SettopboxViewComponent', () => {
  let component: SettopboxViewComponent;
  let fixture: ComponentFixture<SettopboxViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettopboxViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettopboxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
