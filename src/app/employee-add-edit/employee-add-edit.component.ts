import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../component/snackbar.service';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrl: './employee-add-edit.component.css'
})
export class EmployeeAddEditComponent implements OnInit {
  maxDate: Date;
  employeeForm: FormGroup;
  group: string[] = [
    'Avram Roth',
    'Tallulah Page',
    'Ina Turner',
    'Xavier Gamble',
    'Mallory Wright',
    'Vivien Hunter',
    'Barclay Nash',
    'Gay Wilkinson',
    'Dexter Yang',
    'Chastity Atkins'

  ];

  constructor(private _fb: FormBuilder, private _employeeService: EmployeeService, private _dialogRef: MatDialogRef<EmployeeAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _snackBarService: SnackbarService) {
    this.maxDate = new Date();
    this.employeeForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      basicSalary: ['', Validators.required],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required],

    })
  }

  ngOnInit(): void {
    this.employeeForm.patchValue(this.data);
  }

  submitForm() {
    if (this.data) {
      if (this.employeeForm.valid) {
        console.log(this.employeeForm.value);
        this._employeeService.putEmployee(this.data.id, this.employeeForm.value).subscribe({
          next: (res: any) => {
            this._snackBarService.openSnackBar('Data berhasil update!', 'done')
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);

          }
        })
      }
    } else {
      if (this.employeeForm.valid) {
        console.log(this.employeeForm.value);
        this._employeeService.addEmployee(this.employeeForm.value).subscribe({
          next: (res: any) => {
            this._snackBarService.openSnackBar('Data berhasil save!', 'done')
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);

          }
        })

      }
    }

  }
}
