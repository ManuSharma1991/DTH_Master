import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorDetailedViewComponent } from './operator-detailed-view.component';

describe('OperatorDetailedViewComponent', () => {
  let component: OperatorDetailedViewComponent;
  let fixture: ComponentFixture<OperatorDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
