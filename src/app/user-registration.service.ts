import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  user = new User();
  authantiaction = false;

  baseURL = "http://localhost:8080/users/login";

  constructor(private http: HttpClient,private rou:Router) { }
  isAuthenticated = false;

  public loginUserForm(user: User): Observable<any>{
    return this.http.post<any>('http://localhost:8080/users/login',user);
  }

  public saveUser(user:User): Observable<Object>{
    return this.http.post('http://localhost:8080/users/save',user);
  }

  // authentication(){
  // this.loginUserForm(this.user)
  // if(this.user != null){
  //   this.isAuthenticated = true;
  // }


  // }


  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logOut(){
  localStorage.removeItem('token')
  }


   }







