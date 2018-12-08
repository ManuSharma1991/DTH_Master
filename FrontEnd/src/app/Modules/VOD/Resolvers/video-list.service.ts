import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Injectable({
  providedIn: 'root'
})
export class VideoListService implements Resolve<Video[]> {
  constructor(private videoService: VideoService) {}
  resolve(): Observable<Video[]> | Observable<never> {
    return this.videoService.getAllVideos().pipe(
      mergeMap(video => {
        if (video) {
          return of(video);
        }
      })
    );
  }
}
