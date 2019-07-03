import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private authSvg: AuthService, private router: Router) {

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const authStaus = this.authSvg.isLoggedIn;
      console.log(authStaus);

      if (!authStaus) {
        console.error('You shall not pass!!');
        alert('Action not permitted until authentication');
        this.router.navigate(['home']);
      }

    return authStaus;
  }
}
