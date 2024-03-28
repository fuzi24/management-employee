import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { ToastrModule} from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import {MatCardModule} from '@angular/material/card';
import { AddEmployeeDataComponent } from './add-employee-data/add-employee-data.component';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';
import { DeleteAlertComponent } from './delete-alert/delete-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListEmployeeComponent,
    AddEmployeeDataComponent,
    DeleteAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginator,
    MatSnackBarModule,
    ToastrModule.forRoot(),
    MatCardModule,
    NgxMaskDirective,
    NgxMaskPipe


  ],
  providers: [
    provideAnimationsAsync(),
    provideEnvironmentNgxMask(),
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
