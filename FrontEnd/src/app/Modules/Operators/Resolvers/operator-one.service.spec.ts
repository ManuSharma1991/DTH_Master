import { TestBed, inject } from '@angular/core/testing';

import { OperatorOneService } from './operator-one.service';

describe('OperatorOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperatorOneService]
    });
  });

  it('should be created', inject([OperatorOneService], (service: OperatorOneService) => {
    expect(service).toBeTruthy();
  }));
});
