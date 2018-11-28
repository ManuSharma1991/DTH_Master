import { HttpClient } from '@angular/common/http';
import { Operator } from './../../Models/operator';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Constants } from '../../Models/constants';
import { UtilityService } from '../Utilities/utility.service';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  constructor(
    private _http: HttpClient,
    private _utilityService: UtilityService
  ) {}
  private baseURL =
    Constants.BASE_URL + Constants.PORT + Constants.BASE_OPERATOR_URL;

  getAllOperators(): Observable<Operator[]> {
    return this._http.get(this.baseURL + Constants.GET_OPERATOR_URL).pipe(
      map(response => this._utilityService.handleResult(response)),
      catchError(error => this._utilityService.handleError(error))
    );
  }

  insertOperator(operator: Operator): Observable<Operator> {
    return this._http
      .post(this.baseURL + Constants.POST_OPERATOR_URL, operator)
      .pipe(
        map(response => {
          return this._utilityService.handleResult(response);
        }),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  getOperatorById(operatorId: String): Observable<Operator> {
    return this._http
      .get(this.baseURL + Constants.GETONE_OPERATOR_URL + operatorId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  updateOperator(operator: Operator): Observable<Operator> {
    return this._http
      .put(this.baseURL + Constants.UPDATE_OPERATOR_URL, operator)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  deleteOperator(operatorId: String): Observable<Operator> {
    return this._http
      .delete(this.baseURL + Constants.DELETE_OPERATOR_URL + operatorId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }
}
