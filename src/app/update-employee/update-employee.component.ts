import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Employee } from './../Employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:number;
  employee:Employee = new Employee(); //???

  constructor(private empService:EmployeeService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.empService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    },
    error=> console.log(error));

  }

  onSubmit(){
    this.empService.updateEmployee(this.id,this.employee).subscribe(data =>{
      this.goToEmplist();
    },
    error=>console.log(error));
  }

  goToEmplist(){
    this.router.navigate(['/employee-list']);

  }


}
