import { Component, OnInit } from '@angular/core';
import { Distributor } from '../distributor';
import { DistributorService } from '../distributor.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-distributor-registration',
  templateUrl: './distributor-registration.component.html',
  styleUrls: ['./distributor-registration.component.css']
})
export class DistributorRegistrationComponent {
  distributor: Distributor;
  constructor(private distributorService: DistributorService) {}

  distributorRegistrationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    distributorid: new FormControl('', [Validators.required]),
    phonenumber1: new FormControl('', [Validators.required]),
    phonenumber2: new FormControl('', [Validators.required]),
    address1: new FormControl('', Validators.required),
    address2: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required]),
    zone: new FormControl('', Validators.required),
    settopboxlimit: new FormControl('', Validators.required),
    creditlimit: new FormControl('', Validators.required),
    totalcostofinventory: new FormControl('', Validators.required)
  });

  register() {
    console.log(this.distributorRegistrationForm.value);
    this.distributorService
      .insertDistributor(this.distributorRegistrationForm.value)
      .subscribe(data => {
        this.distributor = data;
      });
  }

  reset() {
    this.distributorRegistrationForm.reset();
  }
}
