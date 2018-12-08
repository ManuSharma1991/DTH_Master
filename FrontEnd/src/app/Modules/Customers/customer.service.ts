import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from 'src/app/Services/Utilities/utility.service';
import { Constants } from '../Shared/shared/constants';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(
    private _http: HttpClient,
    private _utilityService: UtilityService
  ) {}
  private baseURL =
    Constants.BASE_URL + Constants.PORT + Constants.BASE_CUSTOMER_URL;

  getAllCustomers(): Observable<Customer[]> {
    return this._http.get(this.baseURL + Constants.GET_CUSTOMER_URL).pipe(
      map(response => this._utilityService.handleResult(response)),
      catchError(error => this._utilityService.handleError(error))
    );
  }

  insertCustomer(customer: Customer): Observable<Customer> {
    return this._http
      .post(this.baseURL + Constants.POST_CUSTOMER_URL, customer)
      .pipe(
        map(response => {
          return this._utilityService.handleResult(response);
        }),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  getCustomerById(customerId: number): Observable<Customer> {
    return this._http
      .get(this.baseURL + Constants.GETONE_CUSTOMER_URL + customerId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this._http
      .put(this.baseURL + Constants.UPDATE_CUSTOMER_URL, customer)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }

  deleteCustomer(customerId: String): Observable<Customer> {
    return this._http
      .delete(this.baseURL + Constants.DELETE_CUSTOMER_URL + customerId)
      .pipe(
        map(response => this._utilityService.handleResult(response)),
        catchError(error => this._utilityService.handleError(error))
      );
  }
}
