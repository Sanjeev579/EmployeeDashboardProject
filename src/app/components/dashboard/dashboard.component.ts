import { Component, OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

type Status = "success" | "error" | "loading";  // Union type
export type todo = {
  name: string;
  priority: "High" | "Medium" | "Low"
}






@Component({
  selector: 'app-dashboard',
  imports: [ChildComponent,AsyncPipe,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [HttpService]
})
export class DashboardComponent implements OnInit{
  count = 0;


   observableForAsyncPipe  = of([1, 2, 3, 4, 5]);

   citiesObservable: Observable<string[]>;

   testObservable$ = of(1,2,3,4,5,6,7)


    timeZones = [
    { country: "United States", timezone: "America/New_York" },
    { country: "United States", timezone: "America/Chicago" },
    { country: "United States", timezone: "America/Denver" },
    { country: "United States", timezone: "America/Los_Angeles" },
    { country: "United Kingdom", timezone: "Europe/London" },
    { country: "India", timezone: "Asia/Kolkata" },
    { country: "Australia", timezone: "Australia/Sydney" },
    { country: "Australia", timezone: "Australia/Melbourne" },
    { country: "Australia", timezone: "Australia/Perth" },
    { country: "Germany", timezone: "Europe/Berlin" },
    { country: "France", timezone: "Europe/Paris" },
    { country: "Spain", timezone: "Europe/Madrid" },
    { country: "Italy", timezone: "Europe/Rome" },
    { country: "Russia", timezone: "Europe/Moscow" },
    { country: "China", timezone: "Asia/Shanghai" },
    { country: "Japan", timezone: "Asia/Tokyo" },
    { country: "Brazil", timezone: "America/Sao_Paulo" },
    { country: "Canada", timezone: "America/Toronto" },
    { country: "Canada", timezone: "America/Vancouver" },
    { country: "Mexico", timezone: "America/Mexico_City" },
    { country: "South Africa", timezone: "Africa/Johannesburg" },
    { country: "Egypt", timezone: "Africa/Cairo" },
    { country: "Argentina", timezone: "America/Argentina/Buenos_Aires" },
    { country: "Turkey", timezone: "Europe/Istanbul" },
    { country: "Saudi Arabia", timezone: "Asia/Riyadh" },
    { country: "United Arab Emirates", timezone: "Asia/Dubai" },
    { country: "Indonesia", timezone: "Asia/Jakarta" },
    { country: "New Zealand", timezone: "Pacific/Auckland" }
  ];


  myStatus:Status = "success"
  

  selectedTimezone: string = '';

  currentTime:any = '';


  

   // Define priority order
   priorityOrder: Record<string, number> = {
    High: 1,
    Medium: 2,
    Low: 3,
  };

  toDoList:Array<todo> = []
  todoForm!: FormGroup ;

   constructor(
    private http:HttpService,
    private fb:FormBuilder
   ){
    this.citiesObservable= of( [
      "Tokyo", "Delhi", "Shanghai", "Mumbai", "Bangkok", "Jakarta", "Seoul",]);

    this.todoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      priority: ['Medium', Validators.required], // Default priority: Medium
    })
   }


  ngOnInit(){


    this.http.serviceVal = 5;
    console.log(this.http.serviceVal);
    this.http.serviceVal = 10;
    console.log(this.http.serviceVal);

    this.callInsideNgOninit().subscribe(result => {
      console.log(result); // Output: 2, 4, 6, 8, 10
    });


    //this.getCities();
    
  }



  onTimezoneChange(event: Event) {
    this.selectedTimezone = (event.target as HTMLSelectElement).value;
    console.log("Selected Timezone:", this.selectedTimezone);

    this.currentTime = this.getCurrentTimebasedOnTimeZone(this.selectedTimezone);


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


  getCurrentTimebasedOnTimeZone(timezone:string){
    let currentTime = new Date();
    return currentTime.toLocaleString("en-US", { timeZone: timezone });
  }

  addToToDo(){
    if(this.todoForm.valid){
      const newTodo: todo = this.todoForm.value;
      this.toDoList.push(newTodo);
      this.sortTodos(); // Sort after adding
    } else {
      console.log("Invalid Form")
    }
  }

   // Sorting function
   sortTodos() {
    this.toDoList.sort((a, b) => this.priorityOrder[a.priority] - this.priorityOrder[b.priority]);
  }

  sortArraybasedOnKey(arr:any, key:string){
    return arr.sort((a:any,b:any) => {
      return b.key - a.key
    })
  }


  // callInsideNgOninit(){
  //   return testObservable$.pipe(
  //     map(val => val * 2),
      
      
  //   )
  // }

  callInsideNgOninit() {
    return this.testObservable$.pipe(
      map((val:any) => val * 2),
      filter((res:any) => res%5 == 0)
    );
    
  }
}
