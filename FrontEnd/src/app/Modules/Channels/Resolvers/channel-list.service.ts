import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Channel } from 'src/app/Modules/Channels/channel';
import { ChannelService } from 'src/app/Modules/Channels/channel.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelListService implements Resolve<Channel[]> {
  constructor(private channelService: ChannelService) {}
  resolve(): Observable<Channel[]> | Observable<never> {
    return this.channelService.getAllChannels().pipe(
      mergeMap(channel => {
        if (channel) {
          return of(channel);
        }
      })
    );
  }
}
