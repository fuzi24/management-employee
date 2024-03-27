
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../component/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee-data',
  templateUrl: './add-employee-data.component.html',
  styleUrl: './add-employee-data.component.css'
})
export class AddEmployeeDataComponent {
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
    { value: 'Chastity Atkins', viewValue: 'Chastity Atkins'},
   
  ];
  filteredOptions: any[];
  itemId: any;
  data: any;
  typeClick: any
  isMenuVisible = true

  constructor(private _fb: FormBuilder, private _employeeService: EmployeeService, private _snackBarService: SnackbarService, private route: ActivatedRoute, private _router: Router) {
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
    this.typeClick = history.state.filter;
    this.route.paramMap.subscribe(params => {
      this.itemId = params.get('id');
      if (this.itemId) {
        this._employeeService.getEmployeeById(this.itemId).subscribe((res) =>{
          this.data = res
          this.employeeForm.patchValue(this.data);
        });
      }
    });
    this.disableForm();
  }

  disableForm(){
    if (this.typeClick === 'view') {
      this.employeeForm.disable()
      this.isMenuVisible = false
    }
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
            this._router.navigate([''])
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
            this._router.navigate([''])
          },
          error: (err: any) => {
            console.log(err);

          }
        })

      }
    }

  }

  cancel(){
    this._router.navigate([''])
  }

}
