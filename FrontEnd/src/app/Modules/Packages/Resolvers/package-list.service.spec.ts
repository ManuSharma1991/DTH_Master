import { TestBed, inject } from '@angular/core/testing';

import { PackageListService } from './package-list.service';

describe('PackageListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackageListService]
    });
  });

  it('should be created', inject([PackageListService], (service: PackageListService) => {
    expect(service).toBeTruthy();
  }));
});
