import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailValidator } from '../../Shared/shared/Validators/email-validator';
import { phoneNumberValidator } from '../../Shared/shared/Validators/phone-number-validator';
import { pincodeValidator } from '../../Shared/shared/Validators/pincode-validator';
import { passwordValidator } from '../../Shared/shared/Validators/password-validator';
import { passwordMatcher } from '../../Shared/shared/Validators/password-matcher';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {
  customer: Customer;
  constructor(private customerService: CustomerService) {}

  customerRegistrationForm = new FormGroup({
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
    addressline1: new FormControl('', [Validators.required]),
    addressline2: new FormControl(''),
    landmark: new FormControl('', [Validators.required]),
    pincode: new FormControl(
      '',
      Validators.compose([Validators.required, pincodeValidator])
    ),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    customerid: new FormControl('', [Validators.required]),
    operatorname: new FormControl('', [Validators.required]),
    retailername: new FormControl('', [Validators.required])
  });

  register() {
    console.log(this.customerRegistrationForm.value);
    this.customerService
      .insertCustomer(this.customerRegistrationForm.value)
      .subscribe(data => {
        this.customer = data;
      });
  }

  reset() {
    this.customerRegistrationForm.reset();
  }
}
