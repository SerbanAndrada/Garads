import { Component, OnInit } from '@angular/core';
import { TicketDetailedModel } from '../models/ticket-model';
import { TicketService } from '../services/ticket.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  ticketList: TicketDetailedModel[];
  userId: number;

  constructor(private ticketSvc: TicketService, private userSvc: UserService) { }

  ngOnInit() {
    this.userId = this.userSvc.getUserIdLS();
    console.log(this.userId);
    this.ticketSvc.getAllTicketsForUser(this.userId).subscribe(
      ticketList => {
        this.ticketList = ticketList;
        console.log(this.ticketList);
      }
    );
  }

  change(id: number): void {
    const buttonId = 'myButton' + id;
    console.log(buttonId);
    const button = document.getElementById(buttonId);
    if ( button.getAttribute('value') === 'More Info') {
      button.setAttribute('value', 'Less Info');
    } else {
      button.setAttribute('value', 'More Info');
    }
  }

  cancelTicket(ticketId: number): void {
    this.ticketSvc.deleteTicket(ticketId).subscribe(
      () => {
        this.ngOnInit();
      },
      () => {
        alert('too late to cancel!!');
      }
    );
  }

}
