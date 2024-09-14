import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './components/users-list/users-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginSuccessfulComponent } from './components/login-successful/login-successful.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterSuccessfulComponent } from './components/register-successful/register-successful.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersListComponent,
    WelcomeComponent,
    LoginSuccessfulComponent,
    RegisterComponent,
    RegisterSuccessfulComponent,
    ChatListComponent,
    EditUsersComponent,
    DocumentListComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
