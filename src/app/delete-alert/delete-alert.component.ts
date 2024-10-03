import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-alert',
  templateUrl: './delete-alert.component.html',
  styleUrl: './delete-alert.component.css'
})
export class DeleteAlertComponent {
  constructor(public dialogRef: MatDialogRef<DeleteAlertComponent>){
    
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
