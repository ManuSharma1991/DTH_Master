import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/Validators/password-validator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  loginform = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.compose([Validators.required, passwordValidator]))
  });

  login() {
    console.log(this.loginform.value);
  }
}
