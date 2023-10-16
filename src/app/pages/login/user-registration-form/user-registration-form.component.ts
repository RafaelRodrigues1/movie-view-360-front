import { Router } from '@angular/router';
import { UserClient } from './../../../core/clients/user.client';
import { Component, AfterViewChecked } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { User } from 'src/app/shared/models/user';
import { MIN_LENGTH } from '../login.component';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.less']
})
export class UserRegistrationFormComponent {

  minLengthPassword: number = MIN_LENGTH
  userName = new FormControl('', [Validators.required]);
  userEmail = new FormControl('', [Validators.required, Validators.email]);
  userPassword = new FormControl('', [Validators.required, Validators.minLength(MIN_LENGTH)])

  constructor(
    private userClient: UserClient,
    private dialog: MatDialog,
    private router: Router
    ){}

  saveUser() {
    const user: User = this.buildUser()
    this.userClient.saveUser(user).subscribe(user => {
      if(user && user.id){
        this.dialog.open(DialogComponent, {
          data: {
            title: 'User saved',
            content: 'User saved successfully',
          }
        }).afterClosed().subscribe(data => location.reload());
      }
    })
  }

  private buildUser(): User {
    return {
      username: this.userName.value!,
      email: this.userEmail.value!,
      password: this.userPassword.value!
    }
  }

  hasFormControllError(): Boolean {
    return !!this.userName.errors || !!this.userEmail.errors || !!this.userPassword.errors
  }
}
