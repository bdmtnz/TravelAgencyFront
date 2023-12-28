import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
// import { HotelService } from '../services/hotel.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ManageRoomModalComponent } from './component/manage-room-modal/manage-room-modal.component';
import { RoomsService } from './services/rooms.service';
import { BookingService } from '../../../../shared/services/booking.service';
import { HotelService } from '../../../../shared/services/hotel.service';
import { IHotel, INIT_HOTEL } from '../hotel/hotel-modal';


@Component({
  selector: 'app-room',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent {
  displayedColumns: string[] = ['position', 'nameHotel', 'city', 'location', 'capacity', 'price', 'enabled', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  data: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  listHoteles!: IHotel[]
  constructor(
    public dialog: MatDialog,
    private readonly serviceHotel: HotelService
  ) {

  }
  ngOnInit(): void {
    this.getHoteles()
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getHoteles() {
    this.serviceHotel.getHotel({}).subscribe(resp => {
      this.listHoteles = resp.data
      console.log(this.listHoteles)
    })
  }

  openDialogRegisterRoom(): void {
    const dialogRef = this.dialog.open(ManageRoomModalComponent, {
      data: this.listHoteles
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}

export interface PeriodicElement {
  id: string;
  nameHotel: string;
  city: string;
  ubication: string;
  price: number
}

