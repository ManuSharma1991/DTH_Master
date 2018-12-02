import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Retailer } from 'src/app/Modules/Retailers/retailer';
import { RetailerService } from 'src/app/Modules/Retailers/retailer.service';

@Injectable({
  providedIn: 'root'
})
export class RetailerListService implements Resolve<Retailer[]> {
  constructor(private retailerService: RetailerService) {}
  resolve(): Observable<Retailer[]> | Observable<never> {
    return this.retailerService.getAllRetailers().pipe(
      mergeMap(retailer => {
        if (retailer) {
          return of(retailer);
        }
      })
    );
  }
}
