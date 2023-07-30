import { UserClient } from './../../../core/clients/user.client';
import { Component, AfterViewChecked } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';

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

  constructor(private userClient: UserClient){}

  ngAfterViewChecked(): void {
    this.userPassword.addValidators(Validators.minLength(this.minLengthPassword))
  }

  saveUser() {
    const user: User = this.buildUser()
    this.userClient.saveClient(user).subscribe(user => console.log(user))
  }

  private buildUser(): User {
    return {
      name: this.userName.value!,
      email: this.userEmail.value!,
      password: this.userPassword.value!
    }
  }

  hasFormControllError(): Boolean {
    return !!this.userName.errors || !!this.userEmail.errors || !!this.userPassword.errors
  }
}
