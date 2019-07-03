import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule} from '@angular/common/http';
import {DataTableModule} from 'angular-6-datatable';
import {MaterialModule} from './material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StorageServiceModule } from 'angular-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ToDurationPipe } from './shared/toDuration.pipe';
import { AccountModule } from './account/account.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketsComponent } from './tickets/tickets.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { ChangeTicketComponent } from './change-ticket/change-ticket.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ToDurationPipe,
    TicketsComponent,
    BuyTicketComponent,
    ChangeTicketComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AccountModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    DataTableModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
