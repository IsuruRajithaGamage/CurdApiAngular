import { Employee } from './../Employee';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService, private router:Router) { }

  employee:Employee = new Employee();

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data=>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error)
    );

  }


  goToEmployeeList(){
    this.router.navigate(['/employee-list']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}
