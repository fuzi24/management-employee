import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AuthService } from './auth/auth.service';
import { AddEmployeeDataComponent } from './add-employee-data/add-employee-data.component';

const routes: Routes = [
  {path: '',component:ListEmployeeComponent, canActivate:[AuthService]},
  {path: 'register',component:RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'list-employee',component:ListEmployeeComponent},
  {path: 'add-employee',component:AddEmployeeDataComponent},
  {path: 'edit-employee/:id', component: AddEmployeeDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
