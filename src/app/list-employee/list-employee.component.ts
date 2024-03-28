import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { SnackbarService } from '../component/snackbar.service';
import { Router } from '@angular/router';
import { DeleteAlertComponent } from '../delete-alert/delete-alert.component';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {
  title = 'employee-management';

  displayedColumns: string[] = ['firstName', 'lastName', 'userName', 'email', 'dateOfBirth', 'basicSalary', 'action'];
  dataSource!: MatTableDataSource<any>;
  dataSearch: any
  filterValue: any

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _employeeService: EmployeeService, private _snackBarService: SnackbarService, private _router: Router) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEmployeeForm(){
    this._router.navigate(['/add-employee']);
  }

  openEditEmployeeForm(data: any, type: any){
    this._router.navigate(['/edit-employee', data.id], { state: { filter: type } });
  }

  getEmployeeList(){
    this._employeeService.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDeleteDialog(id: any): void {
    const dialogRef = this._dialog.open(DeleteAlertComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._employeeService.deleteEmployee(id).subscribe({
          next: (res) => {
            this._snackBarService.openSnackBar('Data berhasil dihapus!', 'done')
            this.getEmployeeList();
          },
          error: (err) => {
            console.log(err);
          }
        })
      } else {
        this.getEmployeeList();
        console.log('Deletion cancelled.');
      }
    });
  }
}
