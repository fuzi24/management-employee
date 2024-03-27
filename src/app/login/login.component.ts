import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { SnackbarService } from '../component/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private _toastr: ToastrService, private _service: EmployeeService,
    private router: Router, private _snackBarService: SnackbarService) {
      sessionStorage.clear();

  }
  result: any;

  loginform = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  proceedlogin() {
    if (this.loginform.valid) {
      this._service.getByCode(this.loginform.value.id).subscribe({
        next: (res: any) => {
          this.result = res;
          if (this.result.password === this.loginform.value.password) {
            if (this.result.isActive) {
              sessionStorage.setItem('username',this.result.id);
              sessionStorage.setItem('role',this.result.role);
              this.router.navigate(['']);
            } else {
              this._snackBarService.openSnackBar('User tidak aktif', 'ok')
            }
          } else {
            this._snackBarService.openSnackBar('Data yang dimasukan salah', 'ok')
          }
        },
        error: (err: any) => {
          console.log(err);
          this._snackBarService.openSnackBar('Data yang anda masukan salah', 'ok')
        }
      })
    } else {
      this._snackBarService.openSnackBar('Masukan data yang valid', 'done')
    }
  }
}
