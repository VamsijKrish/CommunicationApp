import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UsersService } from 'src/app/services/users.service';
import { currentUser } from '../store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UsersService,
    private store: Store
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.userService.getUsers().subscribe(resp => {
      const email = this.loginForm.get('email')?.value;
      const loggedInUser = resp.data.filter((u: any) => u.email === email);
      const userExists = loggedInUser.length > 0;
      if(userExists) {
        this.store.dispatch(currentUser({user: loggedInUser[0]}));
        this.router.navigate(['/users/login-success']);
      } else {
        this.router.navigate(['/users/login-fail']);
      }
    });
  }

}
