import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
  options: any[] = [
    { value: 'Avram Roth', viewValue: 'Avram Roth' },
    { value: 'Tallulah Page', viewValue: 'Tallulah Page' },
    { value: 'Ina Turner', viewValue: 'Ina Turner' },
    { value: 'Xavier Gamble', viewValue: 'Xavier Gamble' },
    { value: 'Mallory Wright', viewValue: 'Mallory Wright' },
    { value: 'Vivien Hunter', viewValue: 'Vivien Hunter' },
    { value: 'Barclay Nash', viewValue: 'Barclay Nash' },
    { value: 'Gay Wilkinson', viewValue: 'Gay Wilkinson' },
    { value: 'Dexter Yang', viewValue: 'Dexter Yang' },
    { value: 'Chastity Atkins', viewValue: 'Chastity Atkins' },
   
  ];
  filteredOptions: any[];

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
    this.filteredOptions = this.options.slice();
  }

  ngOnInit(): void {
    this.employeeForm.patchValue(this.data);
  }

  filterOptions(value: string) {
    const filterValue = value.toLowerCase();
    this.filteredOptions = this.options.filter(option => option.viewValue.toLowerCase().includes(filterValue));
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
