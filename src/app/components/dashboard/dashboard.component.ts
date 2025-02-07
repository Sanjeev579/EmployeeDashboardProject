import { Component, OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { Observable, of } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [ChildComponent,AsyncPipe,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [HttpService]
})
export class DashboardComponent implements OnInit{
  count = 0;


   observableForAsyncPipe  = of([1, 2, 3, 4, 5]);

   citiesObservable: Observable<string[]>;




   constructor(private http:HttpService){
    this.citiesObservable= of( [
      "Tokyo", "Delhi", "Shanghai", "Mumbai", "Bangkok", "Jakarta", "Seoul",]);

   }


  ngOnInit(){


    this.http.serviceVal = 5;
    console.log(this.http.serviceVal);
    this.http.serviceVal = 10;
    console.log(this.http.serviceVal);


    //this.getCities();
    
  }


  getCities(){
    this.http.getCities().subscribe({
      next: (data) => {
        this.citiesObservable = data;
        console.log(this.citiesObservable)
      },
      error:(error) => console.log(error),
      complete: () => {

      }
    })
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
