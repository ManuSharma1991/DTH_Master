import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { OperatorService } from 'src/app/Modules/Operators/operator.service';
import { Operator } from 'src/app/Modules/Operators/operator';

@Injectable({
  providedIn: 'root'
})
export class TestService implements Resolve<Operator> {
  constructor(private operatorService: OperatorService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Operator> | Observable<never> {
    const operatorID = route.paramMap.get('operatorID');
    return this.operatorService.getOperatorById(operatorID).pipe(
      take(1),
      mergeMap(operator => {
        if (operator) {
          return of(operator);
        }
      })
    );
  }
}
