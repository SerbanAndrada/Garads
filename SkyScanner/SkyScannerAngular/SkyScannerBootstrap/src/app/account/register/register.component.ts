import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm?: FormGroup;

  // Injecting the services that will be used
  constructor(private userSvc: UserService, private formBuilderSvc: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    // Instantiate the form
    this.registerForm = this.formBuilderSvc.group({
      UserEmail: ['', [Validators.required, Validators.email]],
      UserName: ['', [Validators.required, Validators.minLength(3)]],
      UserPassword: ['', [Validators.required, Validators.minLength(3)]]
    });

  }

  register(): void {
    const user = this.userSvc.addUser (this.registerForm.getRawValue()).subscribe (
      () => this.router.navigate(['account/login'])
    );
  }
}
