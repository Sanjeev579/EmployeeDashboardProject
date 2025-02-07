import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class HttpService {
   cities = of( [
    "Tokyo", "Delhi", "Shanghai", "Mumbai", "Bangkok", "Jakarta", "Seoul", "Manila", "Beijing", "Istanbul",
    "London", "Paris", "Berlin", "Madrid", "Rome", "Amsterdam", "Vienna", "Moscow", "Lisbon", "Athens",
    "New York City", "Los Angeles", "Chicago", "Toronto", "Mexico City", "Miami", "San Francisco", "Houston", "Vancouver", "Montreal",
    "São Paulo", "Buenos Aires", "Rio de Janeiro", "Bogotá", "Lima", "Santiago", "Caracas", "Quito", "Montevideo", "La Paz",
    "Cairo", "Lagos", "Nairobi", "Cape Town", "Johannesburg", "Accra", "Casablanca", "Addis Ababa", "Algiers", "Dakar",
    "Sydney", "Melbourne", "Auckland", "Brisbane", "Perth", "Wellington", "Adelaide", "Christchurch", "Suva", "Port Moresby"
  ]);


  serviceVal = 0;

  constructor() {

    console.log("Value inside service",this.serviceVal);
   }



  getCities():Observable<any>{
    return  this.cities;
  }
}
