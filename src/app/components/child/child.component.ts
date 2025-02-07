import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
   providers: [HttpService]
})
export class ChildComponent implements OnInit {

  @Input() countervalue = 0; // decorate the property with @Input()

  constructor(private http:HttpService) {}
  ngOnInit(){
    this.http.serviceVal = 50;
    console.log(this.http.serviceVal,"Value inside child component");
  }


  ngDoCheck(){
    console.log("ngDocheck Triggered")
  }

}
