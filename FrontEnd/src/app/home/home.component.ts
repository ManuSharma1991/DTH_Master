import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../Services/Login/authenticate.service';
import { passwordValidator } from '../Modules/Shared/shared/Validators/password-validator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private authenticateService: AuthenticateService,
    private router: Router
  ) {}

  loginform = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl(
      '',
      Validators.compose([Validators.required, passwordValidator])
    )
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
