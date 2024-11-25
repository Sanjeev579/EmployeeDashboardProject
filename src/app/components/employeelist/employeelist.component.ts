import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee.model';
import { EempManageService } from 'src/app/services/empService/eemp-manage.service';
import { ViewEmployeeComponent } from '../view-employee/view-employee.component';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchTerm: string = '';

  isVisible = false;


  @ViewChild('viewEmployee') viewEmployeeComponent!: ViewEmployeeComponent;


  constructor(
    private empService:EempManageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employees = this.empService.getEmployees();
    this.filteredEmployees = this.employees;
    console.log(this.employees);
  }

  onSearch(): void {
    if (this.searchTerm) {
      this.filteredEmployees = this.employees.filter(employee =>
        employee.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.emailId.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredEmployees = this.employees;
    }
  }


  confirmDelete(employee: any): void {
    const confirmDelete = confirm("Are you sure you want to delete this employee?");
    if (confirmDelete) {
      this.empService.deleteEmployee(employee.id);
      this.loadEmployees();
    }
  }

  openEmployeeModal(employee: any) {
    this.viewEmployeeComponent.open(employee);
  }

  editEmployee(employee: any) {
    this.router.navigate(['/edit-employee', employee.id]);
  }


}
