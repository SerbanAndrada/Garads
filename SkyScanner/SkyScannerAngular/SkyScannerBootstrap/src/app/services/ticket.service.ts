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

  getAllTicketsForUser(userId: number): Observable<TicketDetailedModel[]> {
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

  getTicket(ticketId: number): Observable<TicketDetailedModel> {
    return this.httpClient.get<TicketDetailedModel>(env.apiUrl + '/users' + '/tickets/' + ticketId).pipe(
      map(ticket => {
        return ticket;
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
          alert(err.message);
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

  changeTicket(ticket: TicketModel): Observable<boolean> {
    return this.httpClient.put(env.apiUrl + '/users/tickets/changeTicket', ticket).pipe(
      catchError((err: HttpErrorResponse ) => {
        console.log(err);
        if (err.status === 406) {
          alert(err.message);
        }
        return [];
      })
    );
  }

  getAvailableSeatsForFlight(flightId: number): Observable<SeatModel[]> {
    return this.httpClient.get<TicketDetailedModel[]>(env.apiUrl + '/flightSchedule/seatsForFlight/' + flightId).pipe(
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
