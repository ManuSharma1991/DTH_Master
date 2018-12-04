import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ChannelService } from 'src/app/Modules/Channels/channel.service';
import { Channel } from 'src/app/Modules/Channels/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelOneService implements Resolve<Channel> {
  constructor(private channelService: ChannelService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Channel> | Observable<never> {
    const channelnumber = +route.paramMap.get('channelnumber');
    console.log(channelnumber);
    return this.channelService.getChannelById(channelnumber).pipe(
      take(1),
      mergeMap(channel => {
        if (channel) {
          return of(channel);
        }
      })
    );
  }
}
