import { TestBed, inject } from '@angular/core/testing';

import { DistributorListService } from './distributor-list.service';

describe('DistributorListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistributorListService]
    });
  });

  it('should be created', inject([DistributorListService], (service: DistributorListService) => {
    expect(service).toBeTruthy();
  }));
});
