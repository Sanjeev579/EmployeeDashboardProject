import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateFormComponent } from './components/employee-create-form/employee-create-form.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { httpInterceptor } from './http.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateFormComponent,
    EmployeelistComponent,
    ViewEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    {
    provide: 'HTTP_INTERCEPTORS',
      useValue: httpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
