import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from 'src/app/Services/Utilities/utility.service';
import { Constants } from 'src/app/Models/constants';
import { Observable } from 'rxjs';
import { Retailer } from './retailer';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {
  constructor(
    private _http: HttpClient,
    private _utilityService: UtilityService
  ) {}
  private baseURL =
    Constants.BASE_URL + Constants.PORT + Constants.BASE_RETAILER_URL;

  getAllRetailers(): Observable<Retailer[]> {
    return this._http.get(this.baseURL + Constants.GET_RETAILER_URL).pipe(
      map(response => this._utilityService.handleResult(response)),
      catchError(error => this._utilityService.handleError(error))
    );
  }

  insertRetailer(retailer: Retailer): Observable<Retailer> {
    return this._http
      .post(this.baseURL + Constants.POST_RETAILER_URL, retailer)
      .pipe(
        map(response => {
          return this._utilityService.handleResult(response);
        }),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  getRetailerById(retailerId: String): Observable<Retailer> {
    return this._http
      .get(this.baseURL + Constants.GETONE_RETAILER_URL + retailerId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  updateRetailer(retailer: Retailer): Observable<Retailer> {
    return this._http
      .put(this.baseURL + Constants.UPDATE_RETAILER_URL, retailer)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  deleteRetailer(retailerId: String): Observable<Retailer> {
    return this._http
      .delete(this.baseURL + Constants.DELETE_RETAILER_URL + retailerId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }
}
