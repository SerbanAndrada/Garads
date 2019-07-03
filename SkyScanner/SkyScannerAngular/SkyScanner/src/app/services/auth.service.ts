import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus: boolean;

  onInit() {
    if (this.userSvg.getUserIdLS === undefined) {
      this.loggedInStatus = false;
  }
  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    if (this.userSvg.getUserIdLS === undefined) {
      this.loggedInStatus = false;
      }
    return this.loggedInStatus;
  }

  constructor(private http: HttpClient, private userSvg: UserService) { }

}
