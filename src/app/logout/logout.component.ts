import { Router } from '@angular/router';
import { UserRegistrationService } from './../user-registration.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private usrService:UserRegistrationService,private routes:Router) { }

  ngOnInit(): void {
    this.usrService.logOut();
    this.routes.navigate(['']);
  }



}
