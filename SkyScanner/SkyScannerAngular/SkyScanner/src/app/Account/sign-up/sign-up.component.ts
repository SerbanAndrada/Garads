import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  model: UserModel = {};
  userSignUpForm?: FormGroup;

  constructor(private route: ActivatedRoute, private userSvg: UserService) { }

  ngOnInit() {
    this.userSignUpForm = new FormGroup({
      UserName: new FormControl(),
      UserEmail: new FormControl(),
      UserPassword: new FormControl()
    });
  }

  onClickSignUp() {
    this.userSvg.addUser(this.userSignUpForm.getRawValue()).subscribe(
      () => alert('succes'),
      () => alert('fail')
    );
  }

  isFormValid() {
    return this.userSignUpForm && !this.userSignUpForm.invalid;
  }
}

export class FormFieldPrefixSuffixExample {
  hide = true;
}
