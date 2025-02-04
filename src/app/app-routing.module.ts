import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { EmployeeCreateFormComponent } from './components/employee-create-form/employee-create-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard' ,
    pathMatch: 'full'
  },
  {
    path:'dashboard',
    component: DashboardComponent
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
