import { Component, AfterViewChecked } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.less']
})
export class UserRegistrationFormComponent implements AfterViewChecked {

  minLengthPassword!: number
  userName = new FormControl('', [Validators.required]);
  userEmail = new FormControl('', [Validators.required, Validators.email]);
  userPassword = new FormControl('', [Validators.required, Validators.minLength(this.minLengthPassword)])

  ngAfterViewChecked(): void {
    this.userPassword.addValidators(Validators.minLength(this.minLengthPassword))
  }

  hasFormControllError(): Boolean {
    return !!this.userName.errors || !!this.userEmail.errors || !!this.userPassword.errors
  }
}
