import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
// import { HotelService } from '../services/hotel.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { ManageReservationModalComponent } from './components/manage-reservation-modal/manage-reservation-modal.component';
import { BookingService } from '../../../../shared/services/booking.service';
import { PageTitleService } from '../../../../shared/services/page-title.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  displayedColumns: string[] = [
    'position',
    'nameHotel',
    'nameClient',
    'ubication',
    // 'typeReservation',
    'dateInit',
    'dateEnd',
    'city',
    // 'valueReservation',
    'valueReservation',
    'enable',
    'action'

  ];
  dataSource = new MatTableDataSource<PeriodicElement>();
  data: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    public dialog: MatDialog,
    private readonly service: BookingService,
    private readonly router: Router,
    private readonly _pageTitle: PageTitleService
  ) {
    this._pageTitle.setPageTitle({
      title: 'Gestión de reservas',
      backpath: '/layout'
    })
  }
  ngOnInit(): void {
    this.getReservation()
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getReservation(){
    this.service.get().subscribe( data =>{
      // this.dataSource = new MatTableDataSource<any>(data.data);
      console.log(data)
    }) 
  }
  getReservationById(id:string){
    this.router.navigateByUrl(`/layout/booking/${id}`)
  }



  DetailReservation(): void {
    const dialogRef = this.dialog.open(ManageReservationModalComponent, {
      // data: this.data
    });
    // console.log(this.data)
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

export interface PeriodicElement {
  nameHotel: string,
  nameClient: string,
  city: string,
  ubication: string,
  typeReservation: string,
  dateInit: Date,
  dateEnd: Date,
  valueRoom: number,
  valueReservation: number
}

