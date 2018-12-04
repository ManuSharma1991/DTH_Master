import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Channel } from 'src/app/Modules/Channels/channel';
import { ChannelService } from 'src/app/Modules/Channels/channel.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelCategoryListService implements Resolve<String[]> {
  constructor(private channelService: ChannelService) { }
  resolve(): Observable<String[]> | Observable<never> {
    return this.channelService.getChannelCategories().pipe(
      mergeMap(channelCategory => {
        if (channelCategory) {
          return of(channelCategory);
        }
      })
    );
  }
}
