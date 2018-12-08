import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/Services/Utilities/utility.service';
import { Constants } from '../Shared/shared/constants';
import { Observable } from 'rxjs';
import { Video } from './video';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  constructor(
    private _http: HttpClient,
    private _utilityService: UtilityService
  ) {}
  private baseURL =
    Constants.BASE_URL + Constants.PORT + Constants.BASE_VIDEO_URL;

  getAllVideos(): Observable<Video[]> {
    return this._http.get(this.baseURL + Constants.GET_VIDEO_URL).pipe(
      map(response => this._utilityService.handleResult(response)),
      catchError(error => this._utilityService.handleError(error))
    );
  }

  insertVideo(video: Video): Observable<Video> {
    return this._http.post(this.baseURL + Constants.POST_VIDEO_URL, video).pipe(
      map(response => {
        return this._utilityService.handleResult(response);
      }),
      catchError(error => this._utilityService.handleError(error))
    );
  }

  getVideoById(videoId: number): Observable<Video> {
    return this._http
      .get(this.baseURL + Constants.GETONE_VIDEO_URL + videoId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  updateVideo(video: Video): Observable<Video> {
    return this._http
      .put(this.baseURL + Constants.UPDATE_VIDEO_URL, video)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  deleteVideo(videoId: String): Observable<Video> {
    return this._http
      .delete(this.baseURL + Constants.DELETE_VIDEO_URL + videoId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }
}
