import { Component, OnInit } from '@angular/core';
import { FlightModel } from '../models/flight-model';
import { FlightService } from '../services/flight.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  flightSchedule: FlightModel[];
  errorMessage: string;
  userId: number;

  constructor(private flightSvc: FlightService, private userSvc: UserService) { }

  ngOnInit() {
    this.userId = this.userSvc.getUserIdLS();
    this.flightSvc.getAllFlightsForUser(this.userId).subscribe(
      flightSchedule => {
        this.flightSchedule = flightSchedule;
    },
    error => this.errorMessage = <any>error,
    );
  }

  removeFromFavorite(flightId: number) {
    this.flightSvc.deleteFlightFromShortList(this.userId, flightId).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

}
