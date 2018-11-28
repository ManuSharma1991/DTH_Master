import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { OperatorService } from '../Operator/operator.service';
import { Operator } from 'src/app/Models/operator';

@Injectable({
  providedIn: 'root'
})
export class Test2Service implements Resolve<Operator[]> {
  constructor(private operatorService: OperatorService) {}
  resolve(): Observable<Operator[]> | Observable<never> {
    return this.operatorService.getAllOperators().pipe(
      mergeMap(operator => {
        if (operator) {
          return of(operator);
        }
      })
    );
  }
}
