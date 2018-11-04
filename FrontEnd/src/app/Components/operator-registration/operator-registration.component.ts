import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { passwordValidator } from 'src/app/Validators/password-validator';
import { phoneNumberValidator } from 'src/app/Validators/phone-number-validator';
import { pincodeValidator } from 'src/app/Validators/pincode-validator';
import { passwordMatcher } from 'src/app/Validators/password-matcher';
import { emailValidator } from 'src/app/Validators/email-validator';

import * as $ from 'jquery';

@Component({
  selector: 'app-operator-registration',
  templateUrl: './operator-registration.component.html',
  styleUrls: ['./operator-registration.component.css']
})
export class OperatorRegistrationComponent {

  constructor() { }

  operatorRegistrationForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    emailid: new FormControl('', Validators.compose([Validators.required, emailValidator])),
    phonenumber: new FormControl('', Validators.compose([Validators.required, phoneNumberValidator])),
    shiftstarttime: new FormControl('', Validators.required)
  }, { validators: passwordMatcher });

}
