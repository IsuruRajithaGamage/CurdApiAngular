import { UserRegistrationService } from './user-registration.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private routes: Router, private uservice:UserRegistrationService) {}

  canActivate(): boolean {
    if(this.uservice.loggedIn()){
      return true
    }else{
      this.routes.navigate([''])
      return false
    }

  }

}
