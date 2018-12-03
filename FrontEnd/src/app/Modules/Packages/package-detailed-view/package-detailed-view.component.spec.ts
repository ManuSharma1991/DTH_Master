import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageDetailedViewComponent } from './package-detailed-view.component';

describe('PackageDetailedViewComponent', () => {
  let component: PackageDetailedViewComponent;
  let fixture: ComponentFixture<PackageDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
