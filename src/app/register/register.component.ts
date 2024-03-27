import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../component/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private _fb:FormBuilder, private _toastr: ToastrService, private _service: EmployeeService, private _router:Router, private _snackBarService: SnackbarService){

  }

  registerform = this._fb.group({
    id: ['', [Validators.required, Validators.maxLength(5)]],
    name: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    isActive: true,
    role: 'admin'
  });

  proRegistration(){
    if (this.registerform.valid) {
      this._service.proRegis(this.registerform.value).subscribe((res)=>{
        this._snackBarService.openSnackBar('Pendaftaran telah berhasil', 'done')
        this._router.navigate(['login'])
      })
    }else{
      this._snackBarService.openSnackBar('Data tidak valid', 'done')
    }
  }
}
