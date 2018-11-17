import { Operator } from './../../Models/operator';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  private registerOperatorUrl = 'http://localhost:3000/operators';
  private getOperatorsUrl = 'http://localhost:3000/operators';
  private getOperatorByIdUrl = 'http://localhost:3000/operators/';

  operatorList: Operator[] = [{
    'firstname': 'Manu',
    'lastname': 'Sharma',
    'emailid': 'manu.viswanad@gmail.com',
    'phonenumber': 9110783433,
    'shiftstarttime': 8,
    'shiftendtime': 4,
    'startmeridian': 0,
    'endmeridian': 12,
    'maximumnumberofcustomers': 20,
    'totalnumberofactivecustomers': 1,
    'operatorID': 'O-Manu',
    'password': 'Manu@1991',
  }];

  observableOperatorList: Operator[];

  updatedOperator: Operator;
  i: number;
  constructor(private httpservice: HttpClient) { }

  handleResponse(resp: Response | any) {
    if (resp instanceof Response) {
      return resp.json();
    } else {
      return resp;
    }
  }

  register(operator: Operator): Observable<String> {
    return this.httpservice.post(this.registerOperatorUrl, operator).pipe(
      map((resp) => {
        return this.handleResponse(resp);
      }), catchError((error) => {
        return this.handleResponse(error);
      })
    );
  }

  viewOperators(): Observable<any> {
    return this.httpservice.get(this.getOperatorsUrl).pipe(
      map((resp) => {
        return this.handleResponse(resp);
      }), catchError((error) => {
        return this.handleResponse(error);
      })
    );
  }

  getOperatorByID(operatorID: String): Observable<Operator> {
    return this.httpservice.get(this.getOperatorByIdUrl + operatorID).pipe(
      map((resp) => {
        return this.handleResponse(resp);
      }), catchError((error) => {
        return this.handleResponse(error);
      })
    );
  }

  update(operator: Operator) {
    this.updatedOperator = operator;
  }

  updateOperator(operator: Operator) {
    console.log(operator.operatorID);
    for (this.i = 0; this.i < this.operatorList.length; this.i++) {
      if (this.operatorList[this.i].operatorID === operator.operatorID) {
        console.log(operator.operatorID);
        const index = this.operatorList.indexOf(this.operatorList[this.i]);
        this.operatorList.splice(index, 1, operator);
      }
    }
  }

  deleteOperator(operatorID: String) {
    for (this.i = 0; this.i < this.operatorList.length; this.i++) {
      if (this.operatorList[this.i].operatorID === operatorID) {
        const index = this.operatorList.indexOf(this.operatorList[this.i]);
        this.operatorList.splice(index, 1);
      }
    }
  }
}
