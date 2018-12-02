import { TestBed, inject } from '@angular/core/testing';

import { ChannelListService } from './channel-list.service';

describe('ChannelListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChannelListService]
    });
  });

  it('should be created', inject([ChannelListService], (service: ChannelListService) => {
    expect(service).toBeTruthy();
  }));
});
