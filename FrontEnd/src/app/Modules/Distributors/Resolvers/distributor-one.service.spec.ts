import { TestBed, inject } from '@angular/core/testing';

import { DistributorOneService } from './distributor-one.service';

describe('DistributorOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistributorOneService]
    });
  });

  it('should be created', inject([DistributorOneService], (service: DistributorOneService) => {
    expect(service).toBeTruthy();
  }));
});
