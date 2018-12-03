import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettopboxUpdateComponent } from './settopbox-update.component';

describe('SettopboxUpdateComponent', () => {
  let component: SettopboxUpdateComponent;
  let fixture: ComponentFixture<SettopboxUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettopboxUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettopboxUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
