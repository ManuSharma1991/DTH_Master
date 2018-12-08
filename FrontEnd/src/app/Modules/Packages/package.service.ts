import { Injectable } from '@angular/core';
import { UtilityService } from 'src/app/Services/Utilities/utility.service';
import { Constants } from '../Shared/shared/constants';
import { Observable } from 'rxjs';
import { Package } from './package';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  constructor(
    private _http: HttpClient,
    private _utilityService: UtilityService
  ) {}
  private baseURL =
    Constants.BASE_URL + Constants.PORT + Constants.BASE_PACKAGE_URL;

  getAllPackages(): Observable<Package[]> {
    return this._http.get(this.baseURL + Constants.GET_PACKAGE_URL).pipe(
      map(response => this._utilityService.handleResult(response)),
      catchError(error => this._utilityService.handleError(error))
    );
  }

  insertPackage(channelpackage: Package): Observable<Package> {
    return this._http
      .post(this.baseURL + Constants.POST_PACKAGE_URL, channelpackage)
      .pipe(
        map(response => {
          return this._utilityService.handleResult(response);
        }),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  getPackageById(packageId: number): Observable<Package> {
    return this._http
      .get(this.baseURL + Constants.GETONE_PACKAGE_URL + packageId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  updatePackage(channelpackage: Package): Observable<Package> {
    return this._http
      .put(this.baseURL + Constants.UPDATE_PACKAGE_URL, channelpackage)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  deletePackage(packageId: String): Observable<Package> {
    return this._http
      .delete(this.baseURL + Constants.DELETE_PACKAGE_URL + packageId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }
}
