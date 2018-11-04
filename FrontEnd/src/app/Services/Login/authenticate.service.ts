import { User } from './../../Models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  authenticate(user: User): boolean {
    return true;
  }
}
