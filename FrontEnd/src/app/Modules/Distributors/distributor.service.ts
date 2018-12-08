import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/Services/Utilities/utility.service';
import { Constants } from '../Shared/shared/constants';
import { Observable } from 'rxjs';
import { Distributor } from './distributor';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DistributorService {
  constructor(
    private _http: HttpClient,
    private _utilityService: UtilityService
  ) {}
  private baseURL =
    Constants.BASE_URL + Constants.PORT + Constants.BASE_DISTRIBUTOR_URL;

  getAllDistributors(): Observable<Distributor[]> {
    return this._http.get(this.baseURL + Constants.GET_DISTRIBUTOR_URL).pipe(
      map(response => this._utilityService.handleResult(response)),
      catchError(error => this._utilityService.handleError(error))
    );
  }

  insertDistributor(distributor: Distributor): Observable<Distributor> {
    return this._http
      .post(this.baseURL + Constants.POST_DISTRIBUTOR_URL, distributor)
      .pipe(
        map(response => {
          return this._utilityService.handleResult(response);
        }),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  getDistributorById(distributorId: number): Observable<Distributor> {
    return this._http
      .get(this.baseURL + Constants.GETONE_DISTRIBUTOR_URL + distributorId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  updateDistributor(distributor: Distributor): Observable<Distributor> {
    return this._http
      .put(this.baseURL + Constants.UPDATE_DISTRIBUTOR_URL, distributor)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  deleteDistributor(distributorId: String): Observable<Distributor> {
    return this._http
      .delete(this.baseURL + Constants.DELETE_DISTRIBUTOR_URL + distributorId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }
}
