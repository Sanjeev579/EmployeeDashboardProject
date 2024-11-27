import { Injectable } from '@angular/core';
import { Employee } from 'src/app/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EempManageService {

  private employees: Employee[] = [
    {
      "name": "Sanjeev",
      "companyName": "Infosys ",
      "emailId": "sanjeev@gmail.com",
      "contactNo": 975372822,
      "designation": "Senior Software Developer",
      "avatar": {
        name: "Avatar3",
        imageUrl: "/assets/avatars/avatar1.jpeg"
      },
      "id": 1
  }
  ];
  private idCounter = Math.floor(Math.random() * (1000 - 9999 + 1)) + 9999;

  constructor() { }

  addEmployee(employee: Employee): void {
    console.log(this.idCounter)
    employee.id = this.idCounter++;
    this.employees.push(employee);
  }

  editEmployee(updatedEmployee: Employee): void {
    const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
    if (index !== -1) {
      this.employees[index] = updatedEmployee;
    }
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find(emp => emp.id === id);
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }

  searchEmployees(term: string): Employee[] {
    return this.employees.filter(emp => 
      emp.name.toLowerCase().includes(term.toLowerCase()) || 
      emp.emailId.toLowerCase().includes(term.toLowerCase())
    );
  }

  filterEmployees(term: string): Employee[] {
    return this.searchEmployees(term);
  }

    updateEmployee(updatedEmployee: any){
      const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
      if (index !== -1) {
        this.employees[index] = JSON.parse(JSON.stringify(updatedEmployee));
      }
    }
}
