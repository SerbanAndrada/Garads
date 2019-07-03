import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { environment as env} from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, @Inject(SESSION_STORAGE) private storageSvc: StorageService) { }

  // Save user to localStorage
  public addUserLS (userId: number, userName: string): void {

    localStorage.setItem('userId', String(userId));
    localStorage.setItem('userName', userName);

    // If I want to save the usert into SessionStorage
    // this.storageSvc.set('userId', String(userId));
    // this.storageSvc.set('userName', userName);
}

// Verifiy if there is a saved user
public checkUserLS(): boolean {
  if (localStorage.length === 0) {
    return false;
  } else {
    return true;
  }
}

// Verifiy if there is a saved user
public checkUserLSNew(): Observable<boolean> {
  if (localStorage.length === 0) {
    return new Observable<false>() ;
  } else {
    return new Observable<true>();
  }
}

// Get userId from localStorage
public getUserIdLS(): number {
  return +localStorage.getItem('userId');
}

// Change UserName from localStorage
public setNewNameLS(newUserName: string): void {
  localStorage.removeItem('userName');
  localStorage.setItem('userName', newUserName);
}

// Get UserName from localStorage
public getUserNameLS(): string {
  return localStorage.getItem('userName');
}

// Delete user from localStorage
public deleteUserLS(): void {
  localStorage.clear();
}

   // Add a user to database
   addUser(newUser: UserModel): Observable<boolean> {
    return this.httpClient.post<UserModel>(env.apiUrl + '/users', newUser).pipe(
      catchError((err: HttpErrorResponse ) => {
        console.log(err);
        if (err.status === 406) {
          alert('E-mail already used!');
        }
        return [];
      })
    );
  }

  // Check user creditentiales
  checkUser(uncheckedUser: UserModel): Observable<UserModel> {
    return this.httpClient.post<UserModel>(env.apiUrl + '/users/check', uncheckedUser).pipe(
      map(newUser => {
        return newUser;
      }),
      catchError((err: HttpErrorResponse ) => {
        console.log(err);
        if (err.status === 400) {
          alert('The user does not exists!');
        }
        if (err.status === 406) {
          alert('Incorect password!');
        }
        return [];
      })
    );
  }

  // Get user by Id from database
  getUserById(userId: number): Observable<UserModel> {
    return this.httpClient.get<UserModel>(env.apiUrl + '/users/' + userId ).pipe(
      map(user => {
        return user;
      }),
      catchError((err: HttpErrorResponse ) => {
        console.log(err);
        if (err.status === 400) {
          alert('The user does not exists!');
        }
        if (err.status === 406) {
          alert('Incorect password!');
        }
        return [];
      })
    );
  }

  // Change user data
  updateUser(updateUser: UserModel):  Observable<boolean> {
    return this.httpClient.put(env.apiUrl + '/users', updateUser).pipe(
      catchError((err: HttpErrorResponse ) => {
        console.log(err);
        if (err.status === 404) {
          alert('User not found');
        }
        return [];
      })
    );
  }

}
