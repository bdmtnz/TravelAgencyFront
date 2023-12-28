import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { PeriodicElement } from '../../../layout/pages/booking/booking.component';
import { ILoginResponse } from '../../../landing/models/login.model';
import { IBookingReponse } from '../../../../shared/models/booking.model';
import { BookingService } from '../../../../shared/services/booking.service';
import { LocalDbPersist } from '../../../../shared/services/db.service';
import { DB_FLAGS } from '../../../../shared/models/db.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  dataSource: MatTableDataSource<IBookingReponse>
  credential: ILoginResponse
  displayedColumns: string[] = [
    'hotel.name',
    'traveler.name',
    'roomId',
    // 'typeReservation',
    'start',
    'end',
    'city',
    // 'valueReservation',
    'price',
    'action'
  ];
  data: any;

  constructor(
    private readonly _booking: BookingService,
    public dialog: MatDialog,
    // private readonly service: HotelService,
    private readonly router: Router
  ) { 
    this.dataSource = new MatTableDataSource<IBookingReponse>()
    this.credential = LocalDbPersist<ILoginResponse>().get(DB_FLAGS.CREDENTIAL) ?? { id: 'n/a' } as ILoginResponse
  }

  ngOnInit(): void {
    this._booking.getByTraveler(this.credential.id).subscribe(resp => {
      this.dataSource.data = resp.data
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
