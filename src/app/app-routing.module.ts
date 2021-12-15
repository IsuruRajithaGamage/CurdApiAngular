import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'create-employee',component:CreateEmployeeComponent,canActivate: [AuthGuard]},
  {path:'employee-list',component:EmployeeListComponent,canActivate: [AuthGuard]},
  //{path:'',redirectTo:'employee-list',pathMatch:'full'},
  {path:'update-employee/:id',component:UpdateEmployeeComponent,canActivate: [AuthGuard]},
  {path:'logout',component:LogoutComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
