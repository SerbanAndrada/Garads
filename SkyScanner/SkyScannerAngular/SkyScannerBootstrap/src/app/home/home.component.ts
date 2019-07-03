import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { FlightModel } from '../models/flight-model';
import { UserService } from '../services/user.service';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userId: number;
  flightSchedule: FlightModel[];
  sortedData: FlightModel[];
  errorMessage: string;
  searchBy: any;

  constructor(private flightSvc: FlightService, private userSvc: UserService) { }

  ngOnInit() {

    this.searchBy = [{
      id: 0,
      name: 'Search by'
    },
    {
      id: 1,
      name: 'Company'
    },
    {
      id: 1,
      name: 'Departure location'
    },
    {
      id: 1,
      name: 'Arrival location'
    }];
    this.userId = this.userSvc.getUserIdLS();

    this.flightSvc.getAllFlights().subscribe(
      flightSchedule => {
        this.flightSchedule = flightSchedule;
        this.sortedData = this.flightSchedule.slice();
      },
      error => this.errorMessage = <any>error,
    );
  }

  addFlightToFavorite(flightId: number) {
    this.flightSvc.addFlightOnShortList(this.userId, flightId).subscribe(
    );
  }

  sortData(sort: Sort) {
    const data = this.flightSchedule.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Company': return compare(a.Company.CompanyName, b.Company.CompanyName, isAsc);
        case 'DepartureAirport': return compare(a.DepartureAirport.AirportName, b.DepartureAirport.AirportName, isAsc);
        case 'ArrivalAirport': return compare(a.ArrivalAirport.AirportName, b.ArrivalAirport.AirportName, isAsc);
        case 'Duration': return compare(a.Duration, b.Duration, isAsc);
        case 'Price': return compare(a.Price, b.Price, isAsc);
        case 'ArrivalDT': return compare(a.ArrivalDT, b.ArrivalDT, isAsc);
        case 'DepartureDT': return compare(a.DepartuteDT, b.DepartuteDT, isAsc);
        default: return 0;
      }
    });
  }

  setSearchBy(newText: string): void {
    this.searchBy = newText;
  }

}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

