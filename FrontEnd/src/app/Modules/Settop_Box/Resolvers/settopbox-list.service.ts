import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Settopbox } from '../settopbox';
import { SettopboxService } from '../settopbox.service';

@Injectable({
  providedIn: 'root'
})
export class SettopboxListService implements Resolve<Settopbox[]> {
  constructor(private settopboxService: SettopboxService) {}
  resolve(): Observable<Settopbox[]> | Observable<never> {
    return this.settopboxService.getAllSettopboxs().pipe(
      mergeMap(settopbox => {
        if (settopbox) {
          return of(settopbox);
        }
      })
    );
  }
}
