import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { RetailerService } from 'src/app/Modules/Retailers/retailer.service';
import { Retailer } from 'src/app/Modules/Retailers/retailer';

@Injectable({
  providedIn: 'root'
})
export class RetailerOneService implements Resolve<Retailer> {
  constructor(private retailerService: RetailerService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Retailer> | Observable<never> {
    const retailerID = route.paramMap.get('retailerID');
    return this.retailerService.getRetailerById(retailerID).pipe(
      take(1),
      mergeMap(retailer => {
        if (retailer) {
          return of(retailer);
        }
      })
    );
  }
}
