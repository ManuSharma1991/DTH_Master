import { Component, OnInit } from '@angular/core';
import { Settopbox } from '../settopbox';
import { SettopboxService } from '../settopbox.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-settopbox-registration',
  templateUrl: './settopbox-registration.component.html',
  styleUrls: ['./settopbox-registration.component.css']
})
export class SettopboxRegistrationComponent {
  settopbox: Settopbox;
  constructor(private settopboxService: SettopboxService) {}

  settopboxRegistrationForm = new FormGroup({
    settopboxtype: new FormControl('', [Validators.required]),
    settopboxfeatures: new FormControl('', [Validators.required]),
    length: new FormControl('', [Validators.required]),
    width: new FormControl('', [Validators.required]),
    height: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required]),
    installationcharges: new FormControl('', [Validators.required]),
    upgradationcharges: new FormControl('', [Validators.required]),
    discount: new FormControl('', Validators.required),
    billingtype: new FormControl('', Validators.required),
    refundabledepositamount: new FormControl('', Validators.required)
  });

  register() {
    console.log(this.settopboxRegistrationForm.value);
    this.settopboxService
      .insertSettopbox(this.settopboxRegistrationForm.value)
      .subscribe(data => {
        this.settopbox = data;
      });
  }

  reset() {
    this.settopboxRegistrationForm.reset();
  }
}
