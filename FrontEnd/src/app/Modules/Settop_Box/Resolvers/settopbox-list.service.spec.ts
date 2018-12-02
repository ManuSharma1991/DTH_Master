import { TestBed, inject } from '@angular/core/testing';

import { SettopboxListService } from './settopbox-list.service';

describe('SettopboxListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettopboxListService]
    });
  });

  it('should be created', inject([SettopboxListService], (service: SettopboxListService) => {
    expect(service).toBeTruthy();
  }));
});
