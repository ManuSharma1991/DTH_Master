import { AuthenticateService } from './../../Services/Login/authenticate.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordValidator } from 'src/app/Validators/password-validator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authenticateService: AuthenticateService, private router: Router) { }

  loginform = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.compose([Validators.required, passwordValidator]))
  });

  login() {
    console.log(this.loginform.value);
    if (this.authenticateService.authenticate(this.loginform.value) === true) {
      this.router.navigateByUrl('/admindashboard');
    } else {
      this.router.navigateByUrl('/home');
    }
  }
}
