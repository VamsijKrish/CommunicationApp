import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

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
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log('login successfull');
    }
  }

  login() {
    this.userService.getUsers().subscribe(resp => {
      const email = this.loginForm.get('email')?.value;
      const userExists = resp.data.filter((u: any) => u.email === email).length > 0;
      if(userExists) {
        this.router.navigate(['/users/login-success']);
      }
    });
  }

}
