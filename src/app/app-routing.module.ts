import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { EmployeeCreateFormComponent } from './components/employee-create-form/employee-create-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employees' ,
    pathMatch: 'full'
  },
  { path: 'employees', component: EmployeelistComponent },
  {
    path: 'employees/add',
    component: EmployeeCreateFormComponent,
  },
  { path: 'edit-employee/:id', component: EmployeeCreateFormComponent }, // For editing


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
