import { UserRegistrationService } from './user-registration.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CurndApi';

  constructor(private service:UserRegistrationService){}

  log(){
    this.service.isUserLoggedIn();
  }

}


