import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  model: UserModel = {};
  userSettingsForm?: FormGroup;
  user?: UserModel;

  constructor(private route: ActivatedRoute, private userSvg: UserService) { }

  ngOnInit() {

    this.userSettingsForm = new FormGroup({
        UserName: new FormControl(),
        UserEmail: new FormControl(),
        UserPassword: new FormControl()
      });

    if (this.userSvg.checkUserLS()) {
      this.userSvg.getUserById(this.userSvg.getUserIdLS()).subscribe(results => {
        console.log(results);
        this.userSettingsForm = new FormGroup({
          UserId: new FormControl(this.userSvg.getUserIdLS()),
          UserEmail: new FormControl(results.UserEmail),
          UserName: new FormControl(results.UserName),
          UserPassword: new FormControl(results.UserPassword)
        });
      });
    }
  }

  onClickSettings() {
    console.log(this.userSettingsForm.getRawValue());
    this.userSvg.updateUser(this.userSettingsForm.getRawValue()).subscribe(
      () => alert('succes'),
      () => alert('fail')
    );

    this.userSvg.setNewNameLS(this.userSettingsForm.getRawValue().UserName);
  }

}
