import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { phoneNumberValidator } from 'src/app/Validators/phone-number-validator';
import { emailValidator } from 'src/app/Validators/email-validator';

import { shiftTimeValidator } from 'src/app/Validators/shift-time-validator';
import { OperatorService } from '../operator.service';
import { Operator } from '../operator';

@Component({
  selector: 'app-operator-registration',
  templateUrl: './operator-registration.component.html',
  styleUrls: ['./operator-registration.component.css']
})
export class OperatorRegistrationComponent {
  operator: Operator;
  constructor(private operatorService: OperatorService) {}

  operatorRegistrationForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    emailid: new FormControl(
      '',
      Validators.compose([Validators.required, emailValidator])
    ),
    phonenumber: new FormControl(
      '',
      Validators.compose([Validators.required, phoneNumberValidator])
    ),
    startmeridian: new FormControl('', Validators.required),
    shiftstarttime: new FormControl(
      '',
      Validators.compose([Validators.required, shiftTimeValidator])
    ),
    shiftendtime: new FormControl(''),
    endmeridian: new FormControl(''),
    maximumnumberofcustomers: new FormControl('', Validators.required),
    operatorID: new FormControl(''),
    password: new FormControl('Operator@1234')
  });

  shiftEndTimeCalculator() {
    const startTime = parseInt(
      this.operatorRegistrationForm.get('shiftstarttime').value,
      10
    );
    const meridian = parseInt(
      this.operatorRegistrationForm.get('startmeridian').value,
      10
    );
    let endTime = 0;
    let endMeridian = 0;
    if (meridian === 0) {
      if (startTime + 8 <= 12) {
        endTime = startTime + 8;
        endMeridian = 0;
        this.operatorRegistrationForm.controls['shiftendtime'].setValue(
          endTime
        );
        this.operatorRegistrationForm.controls['endmeridian'].setValue(
          endMeridian
        );
      } else if (
        (startTime + 8 > 12 && startTime + 8 < 19) ||
        (startTime + 8 > 20 && startTime + 8 <= 24)
      ) {
        endTime = startTime + 8 - 12;
        endMeridian = 12;
        this.operatorRegistrationForm.controls['shiftendtime'].setValue(
          endTime
        );
        this.operatorRegistrationForm.controls['endmeridian'].setValue(
          endMeridian
        );
      } else if (startTime + 8 === 20) {
        endTime = startTime + 8 - 12;
        endMeridian = 0;
        this.operatorRegistrationForm.controls['shiftendtime'].setValue(
          endTime
        );
        this.operatorRegistrationForm.controls['endmeridian'].setValue(
          endMeridian
        );
      }
    } else if (meridian === 12) {
      if (startTime + meridian + 8 < 24) {
        endTime = startTime + meridian + 8 - 12;
        endMeridian = 12;
        this.operatorRegistrationForm.controls['shiftendtime'].setValue(
          endTime
        );
        this.operatorRegistrationForm.controls['endmeridian'].setValue(
          endMeridian
        );
      } else if (startTime + meridian + 8 === 24) {
        endTime = startTime + meridian + 8 - 12;
        endMeridian = 0;
        this.operatorRegistrationForm.controls['shiftendtime'].setValue(
          endTime
        );
        this.operatorRegistrationForm.controls['endmeridian'].setValue(
          endMeridian
        );
      } else if (startTime + meridian + 8 > 24) {
        endTime = startTime + meridian + 8 - 24;
        endMeridian = 0;
        this.operatorRegistrationForm.controls['shiftendtime'].setValue(
          endTime
        );
        this.operatorRegistrationForm.controls['endmeridian'].setValue(
          endMeridian
        );
      }
    }
  }

  register() {
    console.log(this.operatorRegistrationForm.value);
    this.operatorService
      .insertOperator(this.operatorRegistrationForm.value)
      .subscribe(data => {
        this.operator = data;
      });
    this.operatorRegistrationForm.reset();
    this.operatorService.getAllOperators().subscribe(() => {});
  }

  reset() {
    this.operatorRegistrationForm.reset();
  }
}
