import { Component, AfterViewChecked, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthClient } from 'src/app/core/clients/auth.client';
import { User } from 'src/app/shared/models/user';
import { tap, catchError, of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements AfterViewInit, OnInit {

  minLengthPassword!: number
  userName = new FormControl('', [Validators.required])
  userPassword = new FormControl('', [Validators.required])

  userToLogin!: User
  loginErro?: boolean

  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  ngAfterViewInit(): void {
    this.userPassword.addValidators(Validators.minLength(this.minLengthPassword))
  }

  ngOnInit(): void {
    this.authService.clearAuthorizationToken()
    this.authService.loginSubject.subscribe(value => {
      if(value)
        this.router.navigate(['/'])
      else
      this.loginErro = true
    })
  }

  hasFormControllError(): Boolean {
    return !!this.userName.errors || !!this.userPassword.errors
  }

  login() {
    this.buildUserToLogin()
    this.authService.login(this.userToLogin)
  }

  private buildUserToLogin() {
    this.userToLogin = {
      username: this.userName.value!,
      password: this.userPassword.value!
    }
  }
}
