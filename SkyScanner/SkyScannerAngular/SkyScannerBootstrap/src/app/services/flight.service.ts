import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightModel } from '../models/flight-model';
import { catchError, tap, map } from 'rxjs/operators';
import { environment as env} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private httpClient: HttpClient) { }

  getAllFlights(): Observable<FlightModel[]> {
    return this.httpClient.get<FlightModel[]>(env.apiUrl + '/FlightSchedule').pipe(
      map(flightsCollection => {
        return flightsCollection;
      }),
      tap(console.log),
      catchError((err: HttpErrorResponse ) => {
        console.log(err);
        if (err.status === 404) {
          alert('Not found');
        }
        return[];
      })
    );
  }

  getFlightById(flightId: number): Observable<FlightModel> {
    return this.httpClient.get<FlightModel>(env.apiUrl + '/FlightSchedule/' + flightId).pipe(
      map(flightsCollection => {
        return flightsCollection;
      }),
      tap(console.log),
      catchError((err: HttpErrorResponse ) => {
        console.log(err);
        if (err.status === 404) {
          alert('Not found');
        }
        return[];
      })
    );
  }

  getAllFlightsForUser(userId: number): Observable<FlightModel[]> {
    return this.httpClient.get<FlightModel[]>(env.apiUrl + '/users/' + userId + '/shortList').pipe(
      map(flightsCollection => {
        return flightsCollection;
      }),
      tap(console.log),
      catchError((err: HttpErrorResponse ) => {
        console.log(err);
        if (err.status === 404) {
          alert('Flights not found');
        }
        return[];
      })
    );
  }

  addFlightOnShortList(userId: number, flightId: number): Observable<boolean> {
    return this.httpClient.post(env.apiUrl + '/users/' + userId + '/shortList/addFlight/' + flightId , '' ).pipe(
      catchError((err: HttpErrorResponse ) => {
        console.log(err);
        if (err.status === 406) {
          alert('Action not permitted until authentication!');
        }
        return [];
      })
    );
  }

  deleteFlightFromShortList(userId: number, flightId: number): Observable<boolean> {
    return this.httpClient.delete(env.apiUrl + '/users/' + userId + '/shortList/deleteFlight/' + flightId ).pipe(
      catchError((err: HttpErrorResponse ) => {
        console.log(err);
        if (err.status === 406) {
          alert('Action not permitted until authentication!');
        }
        return [];
      })
    );
  }
}
