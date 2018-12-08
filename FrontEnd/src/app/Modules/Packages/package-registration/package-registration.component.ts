import { Component, OnInit } from '@angular/core';
import { Package } from '../package';
import { PackageService } from '../package.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-package-registration',
  templateUrl: './package-registration.component.html',
  styleUrls: ['./package-registration.component.css']
})
export class PackageRegistrationComponent {
  package: Package;
  constructor(private packageService: PackageService) {}

  packageRegistrationForm = new FormGroup({
    packagename: new FormControl('', [Validators.required]),
    packagecategory: new FormControl('', [Validators.required]),
    packagechargingtype: new FormControl('', [Validators.required]),
    packagetransmissiontype: new FormControl('', [Validators.required]),
    packagecost: new FormControl('', Validators.required),
    addedbydefault: new FormControl('', [Validators.required])
  });

  register() {
    console.log(this.packageRegistrationForm.value);
    this.packageService
      .insertPackage(this.packageRegistrationForm.value)
      .subscribe(data => {
        this.package = data;
      });
  }

  reset() {
    this.packageRegistrationForm.reset();
  }
}
