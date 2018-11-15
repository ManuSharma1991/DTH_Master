import { pincodeValidator } from 'src/app/Validators/pincode-validator';
import { OperatorService } from './../../Services/Operator/operator.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { phoneNumberValidator } from 'src/app/Validators/phone-number-validator';
import { emailValidator } from 'src/app/Validators/email-validator';


@Component({
  selector: 'app-retailer-registration',
  templateUrl: './retailer-registration.component.html',
  styleUrls: ['./retailer-registration.component.css']
})
export class RetailerRegistrationComponent {


  constructor(private operatorService: OperatorService) { }

  retailerRegistrationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    emailid: new FormControl('', Validators.compose([Validators.required, emailValidator])),
    phonenumber1: new FormControl('', Validators.compose([Validators.required, phoneNumberValidator])),
    phonenumber2: new FormControl('', Validators.compose([Validators.required, phoneNumberValidator])),
    addressline1: new FormControl('', [Validators.required]),
    addressline2: new FormControl(''),
    landmark: new FormControl('', [Validators.required]),
    pincode: new FormControl('', Validators.compose([Validators.required, pincodeValidator])),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
  });


  register() {
    console.log(this.retailerRegistrationForm.value);
    this.operatorService.register(this.retailerRegistrationForm.value);
  }

}
