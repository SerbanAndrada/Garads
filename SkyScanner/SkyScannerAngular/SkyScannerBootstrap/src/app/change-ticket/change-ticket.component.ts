import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TicketModel, TicketDetailedModel, SeatModel } from '../models/ticket-model';
import { TicketService } from '../services/ticket.service';
import { FlightModel } from '../models/flight-model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-change-ticket',
  templateUrl: './change-ticket.component.html',
  styleUrls: ['./change-ticket.component.css']
})
export class ChangeTicketComponent implements OnInit {

  ticketId: number;
  ticket: TicketDetailedModel;
  changeTicketForm?: FormGroup;
  flight: FlightModel;
  flightId: number;
  availableSeats: SeatModel[];
  seatSelected: number;

  constructor(private route: ActivatedRoute,
    private ticketSvc: TicketService,
    private formBuilderSvc: FormBuilder,
    private router: Router,
    private flightSvc: FlightService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.ticketId = +params['ticketId'];
      console.log(this.ticketId);
      this.ticketSvc.getTicket(this.ticketId).subscribe(results => {
        this.ticket = results;
        console.log(results);
        this.flightId = results.FlightScheduleId;
        this.flightSvc.getFlightById(this.flightId).subscribe(result => {
          this.flight = result;
        });

        this.ticketSvc.getAvailableSeatsForFlight(this.flightId).subscribe(resulte => {
          this.availableSeats = resulte;
        });
        this.seatSelected = this.ticket.SeatId;

        this.changeTicketForm = this.formBuilderSvc.group({
          TicketId: [this.ticketId],
          SeatId: [this.ticket.SeatId, Validators.required],
          FlightScheduleId: [this.ticket.FlightScheduleId, Validators.required],
          UserId: [this.ticket.UserId, Validators.required],
          Address: this.formBuilderSvc.group({
            Country: [this.ticket.Address.Country, [Validators.required, Validators.minLength(2)]],
            City: [this.ticket.Address.City, [Validators.required, Validators.minLength(2)]],
            Street: [this.ticket.Address.Street, [Validators.required, Validators.minLength(2)]],
            Number: [this.ticket.Address.Number, [Validators.required, Validators.minLength(2)]],
          }),
          Name: [this.ticket.Name, [Validators.required, Validators.minLength(3)]],
          CNP: [this.ticket.CNP, [Validators.required]],
          Comments: [this.ticket.Comments]
        });
      });
    });

  }

    // When the seat is selected save that change in changeTicketForm
    onSeatSelected(): void {
      this.changeTicketForm.patchValue({
        SeatId: this.seatSelected
      });
    }

    save(): void {
      console.log(this.changeTicketForm.getRawValue());
      this.ticketSvc.changeTicket(this.changeTicketForm.getRawValue()).subscribe(
        x => {
          this.router.navigate(['tickets']);
      });
    }

}
