import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from 'src/app/Services/Utilities/utility.service';
import { Constants } from '../Shared/shared/constants';
import { Observable } from 'rxjs';
import { Channel } from './channel';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  constructor(
    private _http: HttpClient,
    private _utilityService: UtilityService
  ) {}
  private baseURL =
    Constants.BASE_URL + Constants.PORT + Constants.BASE_CHANNEL_URL;

  getAllChannels(): Observable<Channel[]> {
    return this._http.get(this.baseURL + Constants.GET_CHANNEL_URL).pipe(
      map(response => this._utilityService.handleResult(response)),
      catchError(error => this._utilityService.handleError(error))
    );
  }

  getChannelCategories(): Observable<String[]> {
    return this._http
      .get(this.baseURL + Constants.GET_CHANNELCATEGORIES_URL)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }
  insertChannel(channel: Channel): Observable<Channel> {
    return this._http
      .post(this.baseURL + Constants.POST_CHANNEL_URL, channel)
      .pipe(
        map(response => {
          return this._utilityService.handleResult(response);
        }),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  getChannelById(channelId: number): Observable<Channel> {
    return this._http
      .get(this.baseURL + Constants.GETONE_CHANNEL_URL + channelId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  updateChannel(channel: Channel): Observable<Channel> {
    return this._http
      .put(this.baseURL + Constants.UPDATE_CHANNEL_URL, channel)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  deleteChannel(channelId: String): Observable<Channel> {
    return this._http
      .delete(this.baseURL + Constants.DELETE_CHANNEL_URL + channelId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }
}
