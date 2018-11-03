import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  loginform = new FormGroup({
    username: new FormControl('', [Validators.required]),
    // tslint:disable-next-line:max-line-length
    password: new FormControl('', Validators.compose([Validators.required, Validators.pattern['^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$']])),
  });

  customerRegistrationForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    emailid: new FormControl('', [Validators.required, Validators.email]),
    phonenumber: new FormControl('', [Validators.required]), // , Validators.pattern['^[6-9]\d{9}$']]),
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl('', [Validators.required]),
    landmark: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required]), // , Validators.pattern['^[1-9][0-9]{5}$']]),
    city: new FormControl('', [Validators.required]),
    stateprovince: new FormControl('', [Validators.required]),
    customerID: new FormControl('', [Validators.required]),
    // tslint:disable-next-line:max-line-length
    password: new FormControl('', [Validators.required])// , Validators.pattern['^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$']])
  });

  login() {
    console.log(this.loginform.value);
  }
}
