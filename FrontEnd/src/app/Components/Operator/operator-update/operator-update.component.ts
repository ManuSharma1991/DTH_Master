import { OperatorService } from './../../../Services/Operator/operator.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { phoneNumberValidator } from 'src/app/Validators/phone-number-validator';
import { emailValidator } from 'src/app/Validators/email-validator';

import { shiftTimeValidator } from 'src/app/Validators/shift-time-validator';
import { Operator } from 'src/app/Models/operator';

@Component({
  selector: 'app-operator-update',
  templateUrl: './operator-update.component.html',
  styleUrls: ['./operator-update.component.css']
})
export class OperatorUpdateComponent implements OnInit {
  operator: Operator;
  errmessage: string;
  constructor(
    private operatorService: OperatorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  operatorUpdationForm = new FormGroup({
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
    maximumnumberofcustomers: new FormControl('', Validators.required)
  });

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.operator = data.Operator;
    });
    this.operatorUpdationForm.patchValue({
      firstname: this.operator.firstname,
      lastname: this.operator.lastname,
      emailid: this.operator.emailid,
      phonenumber: this.operator.phonenumber,
      startmeridian: this.operator.startmeridian,
      shiftstarttime: this.operator.shiftstarttime,
      shiftendtime: this.operator.shiftendtime,
      endmeridian: this.operator.endmeridian,
      maximumnumberofcustomers: this.operator.maximumnumberofcustomers
    });
  }
  shiftEndTimeCalculator() {
    const startTime = parseInt(
      this.operatorUpdationForm.get('shiftstarttime').value,
      10
    );
    const meridian = parseInt(
      this.operatorUpdationForm.get('startmeridian').value,
      10
    );
    let endTime = 0;
    let endMeridian = 0;
    if (meridian === 0) {
      if (startTime + 8 <= 12) {
        endTime = startTime + 8;
        endMeridian = 0;
        this.operatorUpdationForm.controls['shiftendtime'].setValue(endTime);
        this.operatorUpdationForm.controls['endmeridian'].setValue(endMeridian);
      } else if (
        (startTime + 8 > 12 && startTime + 8 < 19) ||
        (startTime + 8 > 20 && startTime + 8 <= 24)
      ) {
        endTime = startTime + 8 - 12;
        endMeridian = 12;
        this.operatorUpdationForm.controls['shiftendtime'].setValue(endTime);
        this.operatorUpdationForm.controls['endmeridian'].setValue(endMeridian);
      } else if (startTime + 8 === 20) {
        endTime = startTime + 8 - 12;
        endMeridian = 0;
        this.operatorUpdationForm.controls['shiftendtime'].setValue(endTime);
        this.operatorUpdationForm.controls['endmeridian'].setValue(endMeridian);
      }
    } else if (meridian === 12) {
      if (startTime + meridian + 8 < 24) {
        endTime = startTime + meridian + 8 - 12;
        endMeridian = 12;
        this.operatorUpdationForm.controls['shiftendtime'].setValue(endTime);
        this.operatorUpdationForm.controls['endmeridian'].setValue(endMeridian);
      } else if (startTime + meridian + 8 === 24) {
        endTime = startTime + meridian + 8 - 12;
        endMeridian = 0;
        this.operatorUpdationForm.controls['shiftendtime'].setValue(endTime);
        this.operatorUpdationForm.controls['endmeridian'].setValue(endMeridian);
      } else if (startTime + meridian + 8 > 24) {
        endTime = startTime + meridian + 8 - 24;
        endMeridian = 0;
        this.operatorUpdationForm.controls['shiftendtime'].setValue(endTime);
        this.operatorUpdationForm.controls['endmeridian'].setValue(endMeridian);
      }
    }
  }

  updateoperator(operator: Operator) {
    this.operator = this.operatorUpdationForm.value;
    console.log(this.operator);
    this.operator.operatorID = operator.operatorID;
    this.operator.totalnumberofactivecustomers =
      operator.totalnumberofactivecustomers;
    console.log(this.operator);
    return this.operatorService
      .updateOperator(this.operator)
      .subscribe(data => {
        this.operator = data;
        this.router.navigateByUrl('/adminoperatormanagement');
      });
  }
}
