import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/Services/Utilities/utility.service';
import { Constants } from '../Shared/shared/constants';
import { Observable } from 'rxjs';
import { Settopbox } from './settopbox';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettopboxService {
  constructor(
    private _http: HttpClient,
    private _utilityService: UtilityService
  ) {}
  private baseURL =
    Constants.BASE_URL + Constants.PORT + Constants.BASE_SETTOPBOX_URL;

  getAllSettopboxs(): Observable<Settopbox[]> {
    return this._http.get(this.baseURL + Constants.GET_SETTOPBOX_URL).pipe(
      map(response => this._utilityService.handleResult(response)),
      catchError(error => this._utilityService.handleError(error))
    );
  }

  insertSettopbox(settopbox: Settopbox): Observable<Settopbox> {
    return this._http
      .post(this.baseURL + Constants.POST_SETTOPBOX_URL, settopbox)
      .pipe(
        map(response => {
          return this._utilityService.handleResult(response);
        }),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  getSettopboxById(settopboxId: number): Observable<Settopbox> {
    return this._http
      .get(this.baseURL + Constants.GETONE_SETTOPBOX_URL + settopboxId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  updateSettopbox(settopbox: Settopbox): Observable<Settopbox> {
    return this._http
      .put(this.baseURL + Constants.UPDATE_SETTOPBOX_URL, settopbox)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  deleteSettopbox(settopboxId: String): Observable<Settopbox> {
    return this._http
      .delete(this.baseURL + Constants.DELETE_SETTOPBOX_URL + settopboxId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }
}
