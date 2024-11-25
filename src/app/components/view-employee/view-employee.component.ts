import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/app/employee.model';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  @Input() employee: any;

  isVisible = false;



  constructor() { }

  ngOnInit(): void {
  }

  open(employee: any) {
    this.employee = employee;
    JSON.stringify(this.employee.avatar)
    console.log(this.employee,"Employee to view")
    
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }


  




}
