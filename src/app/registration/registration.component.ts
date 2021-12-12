import { UserRegistrationService } from './../user-registration.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User = new User();

  constructor(private register:UserRegistrationService,private router:Router ) { }

  ngOnInit(): void {

  }

  public AddUser(){
    this.register.saveUser(this.user).subscribe( data=>{
      console.log(data);
    },
    error => console.log(error)
    );
  }

  onSubmit(){
    console.log(this.user);
    this.AddUser();
  }


}
