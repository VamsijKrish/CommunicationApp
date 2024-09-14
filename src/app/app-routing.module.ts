import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginSuccessfulComponent } from './components/login-successful/login-successful.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterSuccessfulComponent } from './components/register-successful/register-successful.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'users/login', component: LoginComponent},
  { path: 'users/login-success', component: LoginSuccessfulComponent},
  { path: 'users/register', component: RegisterComponent},
  { path: 'users/registration-success', component: RegisterSuccessfulComponent},
  { path: 'users', component: UsersListComponent},
  { path: 'users/register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
