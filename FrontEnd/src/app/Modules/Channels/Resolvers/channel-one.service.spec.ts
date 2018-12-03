import { TestBed, inject } from '@angular/core/testing';

import { ChannelOneService } from './channel-one.service';

describe('ChannelOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChannelOneService]
    });
  });

  it('should be created', inject([ChannelOneService], (service: ChannelOneService) => {
    expect(service).toBeTruthy();
  }));
});
