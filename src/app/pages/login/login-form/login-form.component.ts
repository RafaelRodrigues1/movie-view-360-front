import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MIN_LENGTH } from '../login.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  minLengthPassword: number = MIN_LENGTH
  userName = new FormControl('', [Validators.required])
  userPassword = new FormControl('', [Validators.required, Validators.minLength(MIN_LENGTH)])

  userToLogin!: User
  loginErro?: boolean

  constructor(
    private authService: AuthService,
    private router: Router
    ){}

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
