import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TicketService } from '../services/ticket.service';
import { FlightService } from '../services/flight.service';
import { FlightModel } from '../models/flight-model';
import { SeatModel } from '../models/ticket-model';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {

  userId: number;
  flightId: number;
  flight: FlightModel;
  availableSeats: SeatModel[];
  buyTicketForm?: FormGroup;
  seatSelected: SeatModel;


  // Injecting the services that will be used
  constructor(private userSvc: UserService,
    private formBuilderSvc: FormBuilder,
    private router: Router,
    private ticketSvc: TicketService,
    private flightSvc: FlightService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the userId
    this.userId = this.userSvc.getUserIdLS();
    // Get flightId from url
    this.route.params.subscribe(params => {
      this.flightId = +params['flightId'];
      this.flightSvc.getFlightById(this.flightId).subscribe(results => {
        this.flight = results;
      });
    });

    this.ticketSvc.getAvailableSeatsForFlight(this.flightId).subscribe(results => {
      this.availableSeats = results;
    });

    // Instantiate the form
    this.buyTicketForm = this.formBuilderSvc.group({
      SeatId: ['', Validators.required],
      FlightScheduleId: [this.flightId, Validators.required],
      UserId: [this.userId, Validators.required],
      Address: this.formBuilderSvc.group({
        Country: ['', [Validators.required, Validators.minLength(2)]],
        City: ['', [Validators.required, Validators.minLength(2)]],
        Street: ['', [Validators.required, Validators.minLength(2)]],
        Number: ['', [Validators.required, Validators.minLength(2)]],
      }),
      Name: ['', [Validators.required, Validators.minLength(3)]],
      CNP: ['', [Validators.required]],
      Comments: ['']
    });
  }

  // When the seat is selected save that change in buyTicketForm
  onSeatSelected(): void {
    this.buyTicketForm.patchValue({
      SeatId: this.seatSelected
    });
  }

  buy(): void {
    this.ticketSvc.addTicket(this.buyTicketForm.getRawValue()).subscribe(
      x => {
        this.router.navigate(['tickets']);
    });
  }
}
