import { TestBed, inject } from '@angular/core/testing';

import { CustomerOneService } from './customer-one.service';

describe('CustomerOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerOneService]
    });
  });

  it('should be created', inject([CustomerOneService], (service: CustomerOneService) => {
    expect(service).toBeTruthy();
  }));
});
