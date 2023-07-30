import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { UserClient } from 'src/app/core/clients/user.client';

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
    RouterModule.forRoot(routes),
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [UserClient]
})
export class LoginModule { }
