import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AuthClient } from 'src/app/core/clients/auth.client';
import { catchError, of, Subject } from 'rxjs';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginSubject: Subject<boolean> = new Subject()

  constructor(private authClient: AuthClient) { }

  authenticated(): boolean {
    const token = localStorage.getItem('access-token')
    return !!token
  }

  getAuthorizationToken() {
    return localStorage.getItem('access-token')
  }

  getTokenExpirationDate(token: string): Date | null {
    const decoded: any = jwt_decode(token)

    if(decoded.exp === undefined)
      return null

      const date = new Date(0)
      date.setUTCSeconds(decoded.exp)
      return date
  }

  isTokenExpired(token: string): boolean {
    if(!token) return true

    const date = this.getTokenExpirationDate(token)
    if(!date) return true

    return !(date.valueOf() > new Date().valueOf())
  }

  isUserLoggedIn(): boolean {
    const token = this.getAuthorizationToken()
    return token ? !this.isTokenExpired(token) : false
  }

  login(userToLogin: User) {
    this.authClient.login(userToLogin).pipe(
      catchError((err, caught) => of(err, caught))
    ).subscribe(value => this.verifyLoginValidate(value))
  }

  verifyLoginValidate(value: any) {
    const isValidToken = !!value.token
    if(isValidToken) {
      this.setAuthorizationToken(value.token)
      this.loginSubject.next(true)
    } else {
      this.loginSubject.next(false)
    }
  }

  setAuthorizationToken(token: string) {
    localStorage.setItem('access-token', token);
  }

  clearAuthorizationToken() {
    localStorage.clear();
  }

  getLoggedUsername(): string {
    let token: any = localStorage.getItem('access-token')
    token = token ? jwt_decode(token) : null
    return token ? token.sub : ""
  }
}
