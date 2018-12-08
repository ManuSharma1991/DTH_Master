import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Distributor } from '../distributor';
import { DistributorService } from '../distributor.service';

@Injectable({
  providedIn: 'root'
})
export class DistributorListService implements Resolve<Distributor[]> {
  constructor(private distributorService: DistributorService) {}
  resolve(): Observable<Distributor[]> | Observable<never> {
    return this.distributorService.getAllDistributors().pipe(
      mergeMap(distributor => {
        if (distributor) {
          return of(distributor);
        }
      })
    );
  }
}
