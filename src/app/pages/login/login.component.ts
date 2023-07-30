import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements AfterViewInit {

  minLengthPassword: number = 8
  @ViewChild('login') loginComponent!: LoginComponent
  @ViewChild('userRegistration') userRegistrationComponent!: UserRegistrationFormComponent

  ngAfterViewInit(): void {
    this.loginComponent.minLengthPassword = this.minLengthPassword
    this.userRegistrationComponent.minLengthPassword = this.minLengthPassword
  }
}
