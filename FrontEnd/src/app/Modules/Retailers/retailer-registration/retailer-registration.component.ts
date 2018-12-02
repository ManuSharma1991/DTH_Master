import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../../Retailers/retailer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Retailer } from '../retailer';
import { emailValidator } from '../../Shared/shared/Validators/email-validator';
import { phoneNumberValidator } from '../../Shared/shared/Validators/phone-number-validator';
import { pincodeValidator } from '../../Shared/shared/Validators/pincode-validator';

@Component({
  selector: 'app-retailer-registration',
  templateUrl: './retailer-registration.component.html',
  styleUrls: ['./retailer-registration.component.css']
})
export class RetailerRegistrationComponent {
  retailer: Retailer;
  constructor(private retailerService: RetailerService) {}

  retailerRegistrationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    emailid: new FormControl(
      '',
      Validators.compose([Validators.required, emailValidator])
    ),
    phonenumber1: new FormControl(
      '',
      Validators.compose([Validators.required, phoneNumberValidator])
    ),
    phonenumber2: new FormControl(
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
    state: new FormControl('', [Validators.required])
  });

  register() {
    console.log(this.retailerRegistrationForm.value);
    this.retailerService
      .insertRetailer(this.retailerRegistrationForm.value)
      .subscribe(data => {
        this.retailer = data;
      });
    this.retailerRegistrationForm.reset();
    this.retailerService.getAllRetailers().subscribe(() => {});
  }

  reset() {
    this.retailerRegistrationForm.reset();
  }
}
