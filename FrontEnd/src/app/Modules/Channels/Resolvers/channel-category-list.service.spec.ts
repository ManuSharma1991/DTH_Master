import { TestBed, inject } from '@angular/core/testing';

import { ChannelCategoryListService } from './channel-category-list.service';

describe('ChannelCategoryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChannelCategoryListService]
    });
  });

  it('should be created', inject([ChannelCategoryListService], (service: ChannelCategoryListService) => {
    expect(service).toBeTruthy();
  }));
});
