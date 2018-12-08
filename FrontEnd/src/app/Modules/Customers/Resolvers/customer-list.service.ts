import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerListService implements Resolve<Customer[]> {
  constructor(private customerService: CustomerService) {}
  resolve(): Observable<Customer[]> | Observable<never> {
    return this.customerService.getAllCustomers().pipe(
      mergeMap(customer => {
        if (customer) {
          return of(customer);
        }
      })
    );
  }
}
