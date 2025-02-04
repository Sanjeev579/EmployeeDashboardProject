import { Component, OnInit } from '@angular/core';
import { ParentComponent } from "../parent/parent.component";
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-dashboard',
  imports: [ChildComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  count = 0;


  ngOnInit(){
  }


  incrementCounter(){
    this.count++;
    console.log(this.count);
  }


  decrementCounter(){
    this.count--;
  }

  resetCounter(){
    this.count = 0;
  }

}
