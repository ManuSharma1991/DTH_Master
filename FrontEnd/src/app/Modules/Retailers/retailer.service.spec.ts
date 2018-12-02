import { TestBed, inject } from '@angular/core/testing';

import { RetailerService } from './retailer.service';

describe('RetailerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetailerService]
    });
  });

  it('should be created', inject([RetailerService], (service: RetailerService) => {
    expect(service).toBeTruthy();
  }));
});
