import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {

  @Input() countervalue = 0; // decorate the property with @Input()

  ngOnInit(){
    console.log(this.countervalue);
  }

}
