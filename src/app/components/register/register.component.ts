import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/interfaces/constants';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  register_title = Constants.REGISTER_TITLE;
  registerForm!: FormGroup;

  constructor(    
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  onRegister(user: any) {
    console.log(user);
    this.usersService.getUsers().subscribe(resp => {
      const userExists = resp.data.filter((u: any) => u.email === user.email).length > 0;
      if (!userExists) {
        this.usersService.registerUser({user: user})
          .subscribe(resp => {
              console.log(resp);
            });
      }
    });
  }

}
