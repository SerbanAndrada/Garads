import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  id?: number;
  name?: string;

  model: UserModel = {};
  userLoginForm?: FormGroup;

  constructor(private router: Router, private userSvg: UserService, private authSvg: AuthService) { }

  ngOnInit() {
    this.userLoginForm = new FormGroup({
      UserEmail: new FormControl(),
      UserPassword: new FormControl()
    });
  }


   onClickLogin() {
    const User = this.userSvg.checkUser(this.userLoginForm.getRawValue()).subscribe( newUser => {
      this.userSvg.addUserLS(newUser.UserId, newUser.UserName);
      this.authSvg.setLoggedIn(true);
      this.router.navigate(['home']);
    });
  }
}

export class FormFieldPrefixSuffixExample {
  hide = true;
}
