import { TestBed, inject } from '@angular/core/testing';

import { VideoOneService } from './video-one.service';

describe('VideoOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoOneService]
    });
  });

  it('should be created', inject([VideoOneService], (service: VideoOneService) => {
    expect(service).toBeTruthy();
  }));
});
