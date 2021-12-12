import { Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[];

  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getEmployee();


  }

  updateEmployee(id:number){
   this.router.navigate(['update-employee',id])
}

  private getEmployee(){
    this.employeeService.getEmployeeList().subscribe(data=> {
      this.employees = data;
    });
  }

  deleteEmployee(id:number){
    this.employeeService.deletetEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployee();
    })
  }

}
