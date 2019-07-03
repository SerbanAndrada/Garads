import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketDetailedModel, TicketModel, SeatModel } from '../models/ticket-model';
import { environment as env} from '../../environments/environment';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) { }

  getAllFlightsForUser(userId: number): Observable<TicketDetailedModel[]> {
    return this.httpClient.get<TicketDetailedModel[]>(env.apiUrl + '/users/' + userId + '/tickets').pipe(
      map(ticketsCollection => {
        return ticketsCollection;
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

  addTicket(ticket: TicketModel): Observable<boolean> {
    return this.httpClient.post(env.apiUrl + '/users/tickets/addTicket', ticket).pipe(
      catchError((err: HttpErrorResponse ) => {
        console.log(err);
        if (err.status === 406) {
          alert('Email allready used');
        }
        return [];
      })
    );
  }

  deleteTicket(ticketId: number): Observable<boolean> {
    return this.httpClient.delete(env.apiUrl + '/users/tickets/deleteTicket/' + ticketId).pipe(
      catchError((err: HttpErrorResponse ) => {
        console.log(err);
        if (err.status === 406) {
          alert('Email allready used');
        }
        return [];
      })
    );
  }

  getAvailableSeatsForFlight(flightId: number): Observable<SeatModel[]> {
    return this.httpClient.get<TicketDetailedModel[]>(env.apiUrl + '/seatsForFlight/' + flightId).pipe(
      map(availableSeatCollection => {
        return availableSeatCollection;
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

}
