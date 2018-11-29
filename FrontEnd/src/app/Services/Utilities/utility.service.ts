import { Injectable } from '@angular/core';
import { Errors } from './../../Models/errors';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor() {}

  handleResponse(response: any) {
    if (response instanceof Response) {
      if (response.ok === true) {
        return response.json;
      } else {
        return response;
      }
    } else {
      return response;
    }
  }

  handleResult(response) {
    let result = null;
    try {
      result = this.handleResponse(response);
      if (result === null) {
        throw new Error(Errors.OPERATORS_NOT_FOUND);
      }
    } catch (e) {
      console.log(e);
    }
    return result;
  }

  handleError(error) {
    if (error instanceof Response) {
      return Observable.throw(Errors.SERVER_ERROR);
    }
  }
}
