import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { environment as env} from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // Salvam un user in local storage
  public addUserLS (userId: number, userName: string): void {
      localStorage.setItem('userId', String(userId));
      localStorage.setItem('userName', userName);
  }

  // Verificam daca exista un user in local storage
  public checkUserLS (): boolean {
    if (localStorage.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  // Luam id-ul unui user din local storage
  public getUserIdLS(): number {
    return +localStorage.getItem('userId');
  }

  public setNewNameLS(newUserName: string): void {
    localStorage.removeItem('userName');
    localStorage.setItem('userName', newUserName);
  }

  // Luam numele unui user din local storage
  public getUserNameLS(): string {
    return localStorage.getItem('userName');
  }

  // Scoatem un user din local storage
  public deleteUserLS(): void {
    localStorage.clear();
  }


  // Metoda prin care adaugam un utilizator
  addUser(newUser: UserModel): Observable<boolean> {
    return this.httpClient.post<UserModel>(env.apiUrl + '/users', newUser).pipe(
      catchError((err: HttpErrorResponse ) => {
        console.log(err);
        if (err.status === 406) {
          alert('Action not permitted!');
        }
        return [];
      })
    );
  }

  // Metoda prin care vedem daca utilizatorul a introdus creditentiale valide
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

  // Metoda prin care obtinem un utilizator pe baza id-ului
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

  // Metoda prin care modificam datele unui utilizator
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
