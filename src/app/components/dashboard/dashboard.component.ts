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
  

  selectedTimezone: string = '';

  currentTime:any = '';

  



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

}
