import { TestBed, inject } from '@angular/core/testing';

import { PackageOneService } from './package-one.service';

describe('PackageOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackageOneService]
    });
  });

  it('should be created', inject([PackageOneService], (service: PackageOneService) => {
    expect(service).toBeTruthy();
  }));
});
