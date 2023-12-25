import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HotelService } from '../services/hotel.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ManageRoomModalComponent } from './components/manage-room-modal/manage-room-modal.component';

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
    // 'typeRoom',
    'dateInit',
    'dateEnd',
    'city',
    // 'valueRoom',
    'valueReservation',
    'enable',
    'action'

  ];
  dataSource = new MatTableDataSource<PeriodicElement>();
  data: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    public dialog: MatDialog,
    private readonly service: HotelService
  ) {

  }
  ngOnInit(): void {
    // this.getHotel()
    this.getReservation()
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getReservation(){
    this.service.getReservation().subscribe( data =>{
      this.dataSource = new MatTableDataSource<any>(data);
      console.log(this.dataSource.data)
    })
    
  }



  DetailReservation(): void {
    const dialogRef = this.dialog.open(ManageRoomModalComponent, {
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
  typeRoom: string,
  dateInit: Date,
  dateEnd: Date,
  valueRoom: number,
  valueReservation: number
}

