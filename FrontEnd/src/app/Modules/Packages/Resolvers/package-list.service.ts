import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Package } from '../package';
import { PackageService } from '../package.service';

@Injectable({
  providedIn: 'root'
})
export class PackageListService implements Resolve<Package[]> {
  constructor(private packageService: PackageService) {}
  resolve(): Observable<Package[]> | Observable<never> {
    return this.packageService.getAllPackages().pipe(
      mergeMap(channelpackage => {
        if (channelpackage) {
          return of(channelpackage);
        }
      })
    );
  }
}
