import { TestBed, inject } from '@angular/core/testing';

import { RetailerOneService } from './retailer-one.service';

describe('RetailerOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetailerOneService]
    });
  });

  it('should be created', inject([RetailerOneService], (service: RetailerOneService) => {
    expect(service).toBeTruthy();
  }));
});
