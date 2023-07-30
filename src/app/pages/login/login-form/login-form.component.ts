import { Component, AfterViewChecked } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements AfterViewChecked {

  minLengthPassword!: number
  userEmail = new FormControl('', [Validators.required, Validators.email]);
  userPassword = new FormControl('', [Validators.required])

  ngAfterViewChecked(): void {
    this.userPassword.addValidators(Validators.minLength(this.minLengthPassword))
  }

  hasFormControllError(): Boolean {
    return !!this.userEmail.errors || !!this.userPassword.errors
  }
}
