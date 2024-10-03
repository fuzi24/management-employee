import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(msg: string, action: string = 'ok') {
    this._snackBar.open(msg, action, {
      duration: 2000,
      verticalPosition: 'bottom'
    });
  }
}
