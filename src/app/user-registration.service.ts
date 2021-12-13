import { Observable } from 'rxjs';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }
  isAuthenticated = false;

  public loginUserForm(user: User): Observable<any>{
    return this.http.post<any>('http://localhost:8080/users/login',user);
  }

  public saveUser(user:User): Observable<Object>{
    return this.http.post('http://localhost:8080/users/save',user);
  }





}
