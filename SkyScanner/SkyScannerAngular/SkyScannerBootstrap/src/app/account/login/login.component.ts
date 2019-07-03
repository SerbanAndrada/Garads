import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm?: FormGroup;

  // Injecting the services that will be used
  constructor(private userSvc: UserService, private formBuilderSvc: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    // Instantiate the form
    this.loginForm = this.formBuilderSvc.group({
      UserEmail: ['', [Validators.required, Validators.email]],
      UserPassword: ['', [Validators.required, Validators.minLength(3)]]
    });

  }

  login(): void {
    this.userSvc.checkUser(this.loginForm.getRawValue()).subscribe( verifiedUser => {
      this.userSvc.addUserLS(verifiedUser.UserId, verifiedUser.UserName);
      this.router.navigate(['home']);
    });
  }

}
