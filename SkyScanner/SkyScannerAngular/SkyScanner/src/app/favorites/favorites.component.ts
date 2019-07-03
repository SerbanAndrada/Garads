import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightModel} from '../models/flight-model';
import { FlightService } from '../services/flight.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  displayedColumns: string[] = ['company', 'departureLocation', 'departureTime', 'arrivalTime', 'arrivalLocation', 'duration',
  'price', 'buttonDeleteFav', 'buttonBuy'];
  dataSource: MatTableDataSource<FlightModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private flightService: FlightService, private userSvg: UserService ) { }

  ngOnInit() {
      this.flightService.getAllFlightsForUser(+this.userSvg.getUserIdLS()).subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      });
  }

  removeFromFavorite(flightId: number) {
    this.flightService.deleteFlightFromShortList(+this.userSvg.getUserIdLS(), flightId).subscribe(
    );
  }

}
