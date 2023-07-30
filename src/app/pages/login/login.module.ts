import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "login", component: LoginComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    UserRegistrationFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class LoginModule { }
