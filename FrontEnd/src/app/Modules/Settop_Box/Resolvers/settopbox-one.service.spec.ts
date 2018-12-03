import { TestBed, inject } from '@angular/core/testing';

import { SettopboxOneService } from './settopbox-one.service';

describe('SettopboxOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettopboxOneService]
    });
  });

  it('should be created', inject([SettopboxOneService], (service: SettopboxOneService) => {
    expect(service).toBeTruthy();
  }));
});
