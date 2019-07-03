import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  authentificated: Boolean;

  constructor(private userSvc: UserService, private router: Router) {}

  ngOnInit() {
    this.authentificated = this.userSvc.checkUserLS();
  }

  SignOut(): void {
    this.userSvc.deleteUserLS();
    this.ngOnInit();
    this.router.navigate(['home']);
  }

  ngOnChange() {
    this.authentificated = this.userSvc.checkUserLS();
  }

}
