import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightModel} from '../models/flight-model';
import { FlightService } from '../services/flight.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['company', 'departureLocation', 'departureTime', 'arrivalTime', 'arrivalLocation', 'duration',
  'price', 'buttonFav', 'buttonBuy'];
  dataSource: MatTableDataSource<FlightModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private flightSvg: FlightService, private userSvg: UserService) {}

  ngOnInit() {
    this.flightSvg.getAllFlights().subscribe(results => {
    this.dataSource = new MatTableDataSource(results);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    });
  }

  addFlightToFavorite(flightId: number) {
    this.flightSvg.addFlightOnShortList(+this.userSvg.getUserIdLS(), flightId).subscribe();
  }

}

