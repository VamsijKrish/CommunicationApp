import { Component } from '@angular/core';
import { Constants } from 'src/app/interfaces/constants';

@Component({
  selector: 'app-register-successful',
  templateUrl: './register-successful.component.html',
  styleUrls: ['./register-successful.component.scss']
})
export class RegisterSuccessfulComponent {

  registrationSuccess = Constants.REGISTRATION_SUCCESS;

}
