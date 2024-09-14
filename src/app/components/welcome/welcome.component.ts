import { Component } from '@angular/core';
import { Constants } from 'src/app/interfaces/constants';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  welcomeTitle = Constants.WELCOME_TITLE;

}
