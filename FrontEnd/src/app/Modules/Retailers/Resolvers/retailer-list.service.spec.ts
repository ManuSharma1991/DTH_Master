import { TestBed, inject } from '@angular/core/testing';

import { RetailerListService } from './retailer-list.service';

describe('RetailerListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetailerListService]
    });
  });

  it('should be created', inject([RetailerListService], (service: RetailerListService) => {
    expect(service).toBeTruthy();
  }));
});
