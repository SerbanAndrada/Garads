import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SkyScanner';

  constructor(private userSvg: UserService, private authSvg: AuthService ) { }

  SignOut() {
    this.userSvg.deleteUserLS();
    this.authSvg.setLoggedIn(false);
  }
}
