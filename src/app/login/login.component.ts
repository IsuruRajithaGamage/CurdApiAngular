import { Router } from '@angular/router';
import { UserRegistrationService } from './../user-registration.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  message = '';
  Authentication = false;
  constructor(private userservice:UserRegistrationService,private route: Router, service:EmployeeService) { }

  ngOnInit(): void {
  }

   loginUser(){
    this.userservice.loginUserForm(this.user).subscribe(
      data => {
        console.log(this.user.username);
        this.userservice.isloginUser();
    this.route.navigate(['/employee-list'])

  },
    error => {console.log("fuck");
  this.message="please check user name and passord!";

}
    )

  }


}
