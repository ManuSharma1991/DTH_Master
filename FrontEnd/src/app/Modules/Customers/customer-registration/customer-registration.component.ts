import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { passwordValidator } from 'src/app/Validators/password-validator';
import { phoneNumberValidator } from 'src/app/Validators/phone-number-validator';
import { pincodeValidator } from 'src/app/Validators/pincode-validator';
import { passwordMatcher } from 'src/app/Validators/password-matcher';
import { emailValidator } from 'src/app/Validators/email-validator';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {

  customerRegistrationForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    emailid: new FormControl('', Validators.compose([Validators.required, emailValidator])),
    phonenumber: new FormControl('', Validators.compose([Validators.required, phoneNumberValidator])),
    addressline1: new FormControl('', [Validators.required]),
    addressline2: new FormControl(''),
    landmark: new FormControl('', [Validators.required]),
    pincode: new FormControl('', Validators.compose([Validators.required, pincodeValidator])),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    customerid: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.compose([Validators.required, passwordValidator])),
    confirmpassword: new FormControl('', Validators.compose([Validators.required, passwordValidator]))
  }, { validators: passwordMatcher });

  register() {
    console.log(this.customerRegistrationForm.value);
  }

}
