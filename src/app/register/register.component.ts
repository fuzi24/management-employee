import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private builder:FormBuilder, private toastr: ToastrService, private service: EmployeeService, private router:Router){

  }

  registerform = this.builder.group({
    id:this.builder.control('', Validators.compose([Validators.required, Validators.maxLength(5)])),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    isActive: this.builder.control(true),
    role: this.builder.control('admin')
  });

  proRegistration(){
    if (this.registerform.valid) {
      this.service.proRegis(this.registerform.value).subscribe((res)=>{
        this.toastr.success('Registered success')
        this.router.navigate(['login'])
      })
    }else{
      this.toastr.warning('please enter valid data')
    }
  }
}
