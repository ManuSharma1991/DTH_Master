import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OperatorService } from 'src/app/Modules/Operators/operator.service';
import { Operator } from 'src/app/Modules/Operators/operator';

export class OperatorRegistrationComponent {
  operator: Operator;
  constructor(private operatorService: OperatorService) {}

  operatorRegistrationForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    emailid: new FormControl('', [Validators.required]),
    phonenumber: new FormControl('', [Validators.required]),
    startmeridian: new FormControl('', Validators.required),
    shiftstarttime: new FormControl('', [Validators.required]),
    shiftendtime: new FormControl('', [Validators.required]),
    endmeridian: new FormControl('', [Validators.required]),
    maximumnumberofcustomers: new FormControl('', Validators.required)
  });

  register() {
    console.log(this.operatorRegistrationForm.value);
    this.operatorService
      .insertOperator(this.operatorRegistrationForm.value)
      .subscribe(data => {
        this.operator = data;
      });
  }

  reset() {
    this.operatorRegistrationForm.reset();
  }
}
