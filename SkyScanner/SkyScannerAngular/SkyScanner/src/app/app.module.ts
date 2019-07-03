import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyFlightsComponent } from './my-flights/my-flights.component';
import { LoginComponent } from './Account/login/login.component';
import { SignUpComponent } from './Account/sign-up/sign-up.component';
import { SettingsComponent } from './Account/settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { AuthGuard } from './services/auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    MyFlightsComponent,
    LoginComponent,
    SignUpComponent,
    SettingsComponent,
    BuyTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
