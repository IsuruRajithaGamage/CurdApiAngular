
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL="http://localhost:8080/employee/list";
  baseURL1="http://localhost:8080/employee/update";


  constructor(private httpClient: HttpClient) { }

  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee : Employee):Observable<Object>{
    return this.httpClient.post('http://localhost:8080/employee/save',employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee:Employee) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL1}/${id}`,employee);
  }

  deletetEmployee(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}
