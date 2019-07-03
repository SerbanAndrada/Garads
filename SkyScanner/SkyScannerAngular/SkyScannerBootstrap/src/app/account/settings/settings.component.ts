import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingsForm?: FormGroup;
  user?: UserModel;

  // Injecting the services that will be used
  constructor(private userSvc: UserService, private formBuilderSvc: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    // Check if there is a user already logged in
    if (this.userSvc.checkUserLS()) {
      // If it is we will display
      this.userSvc.getUserById(this.userSvc.getUserIdLS()).subscribe(results => {
        this.user = results;
        // Instantiate the form
        this.settingsForm = this.formBuilderSvc.group({
          UserId: [this.user.UserId],
          UserEmail: [this.user.UserEmail, [Validators.required, Validators.email]],
          UserName: [this.user.UserName, [Validators.required, Validators.minLength(3)]],
          UserPassword: [this.user.UserPassword, [Validators.required, Validators.minLength(3)]]
        });
      });
    } else {
      this.router.navigate(['home']);
    }
  }

  save(): void {
    const user = this.userSvc.updateUser(this.settingsForm.getRawValue()).subscribe(
      () => this.reloadData() ,
      () => alert('fail')
    );
  }

  reloadData(): void {
    this.userSvc.getUserById(this.userSvc.getUserIdLS()).subscribe(results => {
      this.user = results;
      // Change form values
      this.settingsForm.patchValue({
        UserEmail: this.user.UserEmail,
        UserName: this.user.UserName,
        UserPassword: this.user.UserPassword
      });
      this.userSvc.setNewNameLS(this.user.UserName);
    });
  }

}
