import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { result } from '../share/model/result';
import { User } from '../share/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;
  constructor(private http: HttpClient, private router: Router) { }
/**
 * đăng nhập
 * @param param 
 * @returns 
 */
  login(param: any) {
    return this.http.post<any>(`${environment.baseUrl}/v1/auth/login`, param)
    .pipe(
      catchError(this.handleError),
      tap(resData => {
        if(resData && resData.data)
        {
          this.handleAuthentication(
            resData.data.username, 
            resData.data.id,
            resData.data.accessToken
          );
        }
      })
    );
  }
  autoLogin() {
    const userData: {
      username: string;
      id: string;
      _token: string;
      exp: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.username,
      userData.id,
      userData._token,
      new Date(userData.exp)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData.exp).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
  /**
   * đăng ký
   * @param param 
   * @returns 
   */
  signup(param:any){
    return this.http.post<any>(`${environment.baseUrl}/v1/auth/register`, param)
  }

  private handleAuthentication(
    username: string,
    id: string,
    token: string
  ) {
    let tokenData = JSON.parse(atob(token.split('.')[1]));
    const expirationDate = new Date (tokenData.exp * 1000);
    const expiresIn = expirationDate.getTime() - new Date().getTime();
    const user = new User(username, id, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'Có lỗi khi đăng nhập, vui lòng thử lại!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes?.error?.error?.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }
}
