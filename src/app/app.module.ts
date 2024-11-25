import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateFormComponent } from './components/employee-create-form/employee-create-form.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component'; // Import FormsModule


@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateFormComponent,
    EmployeelistComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
