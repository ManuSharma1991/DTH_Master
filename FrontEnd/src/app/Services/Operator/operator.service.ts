import { Operator } from './../../Models/operator';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
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
  updatedOperator: Operator;
  i: number;
  constructor() { }

  register(operator: Operator) {
    this.operatorList.push(operator);
  }

  viewOperators(): Operator[] {
    return this.operatorList;
  }

  getOperatorByID(operatorID: String): Operator {
    for (this.i = 0; this.i < this.operatorList.length; this.i++) {
      if (this.operatorList[this.i].operatorID === operatorID) {
        return this.operatorList[this.i];
      }
    }
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
