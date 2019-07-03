import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Account/login/login.component';
import { SignUpComponent } from './Account/sign-up/sign-up.component';
import { SettingsComponent } from './Account/settings/settings.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyFlightsComponent } from './my-flights/my-flights.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: 'myFlights', component: MyFlightsComponent, canActivate: [AuthGuard]  },
  { path: 'account/login', component : LoginComponent},
  { path: 'account/signup', component: SignUpComponent},
  { path: 'account/settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'buyTicket/:id', component: BuyTicketComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
