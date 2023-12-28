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
import { InfoModalComponent } from '../../../../shared/components/info-modal/info-modal.component';
import { IManageRoomRequest, INITIAL_ROOM } from '../../../../shared/models/room.model';
import { ISelectOption } from '../../../../shared/components/models/response';
import { IRoom } from '../../../../shared/models/booking.model';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-room',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    CurrencyPipe
  ],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss'
})
export class RoomComponent {
  displayedColumns: string[] = ['nameHotel', 'city', 'location', 'capacity', 'price', 'enabled', 'action'];
  dataSource = new MatTableDataSource<IRoom>();
  data: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  listHoteles!: IHotel[]
  listTypeRoom!: ISelectOption[]
  dataManageHotel: IManageRoomRequest = INITIAL_ROOM
  constructor(
    public dialog: MatDialog,
    private readonly serviceHotel: HotelService,
    private readonly serviceRoom: RoomsService,
  ) {

  }
  ngOnInit(): void {
    this.getHoteles()
    this.getRoomType()
    this.getRooms()
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getHoteles() {
    this.serviceHotel.getHotel({}).subscribe(resp => {
      this.listHoteles = resp.data
      // console.log(this.listHoteles)
    })
  }
  getRoomType() {
    this.serviceRoom.getRoomType().subscribe(resp => {
      this.listTypeRoom = resp.data["types"]
    })
  }
  getRooms() {
    this.serviceRoom.getRooms().subscribe(resp => {
      this.dataSource = new MatTableDataSource<IRoom>(resp.data);
    })

  }
  editRoom(id: string) {
    this.serviceRoom.getRoomById(id).subscribe(resp => {
      this.openDialogEditRoom(resp.data)
    })

  }

  openDialogEditRoom(data: IRoom): void {
    const dialogRef = this.dialog.open(ManageRoomModalComponent, {
      data: {
        title: "Editar Habitacion",
        button: "Guardar",
        data: {
          ...data,
          hotelId: data.hotel.id
        },
        type: this.listTypeRoom,
        hotel: this.listHoteles
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.serviceRoom.postRoom(result).subscribe(data => {
        if (data.status != 200) return
        this.getRooms()
        const dialogRef = this.dialog.open(InfoModalComponent, {
          data: {
            title: "Atención",
            description: "Actualizacion exitosa",
            btnTitle: "aceptar",
            icon: "info"
          }
        });
        this.dataManageHotel = INITIAL_ROOM
        dialogRef.afterClosed().subscribe(result => {

        });

      })
    });
  }

  openDialogRegisterRoom(): void {
    let list = {
      data: this.dataManageHotel,
      type: this.listTypeRoom,
      hotel: this.listHoteles
    }
    const dialogRef = this.dialog.open(ManageRoomModalComponent, {
      data: list
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataManageHotel = result
        this.openDialogConfirmation()
        return
      }
      this.dataManageHotel = INITIAL_ROOM

    });
  }
  openDialogConfirmation() {
    const dialogRef = this.dialog.open(InfoModalComponent, {
      data: {
        title: "Atención",
        description: "¿Esta seguro que desea guardar una nueva habitacion?",
        btnTitle: "Guardar",
        icon: "info"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.openDialogRegisterRoom()
        return
      }
      this.serviceRoom.postRoom(this.dataManageHotel).subscribe(data => {
        if (data.status != 200) return
        this.getRooms()
        const dialogRef = this.dialog.open(InfoModalComponent, {
          data: {
            title: "Atención",
            description: "Se ha Registrado exitosamente",
            btnTitle: "aceptar",
            icon: "info"
          }
        });
        this.dataManageHotel = INITIAL_ROOM
        dialogRef.afterClosed().subscribe(result => {

        });

      })

    });
  }




}

// export interface PeriodicElement {
//   id: string;
//   nameHotel: string;
//   city: string;
//   ubication: string;
//   price: number
// }

