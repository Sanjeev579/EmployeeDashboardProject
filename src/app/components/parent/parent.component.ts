import { Component, Input, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-parent',
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit{
  
  constructor(private http:HttpService){

  }

  ngOnInit(){
    console.log(this.http.serviceVal,"Value inside parent component");
  }


}
