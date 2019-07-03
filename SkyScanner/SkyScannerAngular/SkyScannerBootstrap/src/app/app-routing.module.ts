import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { ChangeTicketComponent } from './change-ticket/change-ticket.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tickets', component: TicketsComponent, canActivate: [AuthGuard] },
  { path: 'buyTicket/:flightId', component: BuyTicketComponent, canActivate: [AuthGuard]},
  { path: 'changeTicket/:ticketId', component: ChangeTicketComponent , canActivate: [AuthGuard]},
  { path: 'favorites', component: FavoritesComponent , canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
