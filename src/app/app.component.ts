import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employeeManagementApp';



  constructor(private router: Router) {}

  navigateToAddEmployee() {
    this.router.navigate(['/employees/add']); // Redirect to the Add Employee page
  }


}
