import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HotelService } from '../services/hotel.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


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
  displayedColumns: string[] = ['position', 'nameHotel', 'city', 'ubication', 'capacity','price','enable', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  data: any ;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  constructor(
    public dialog: MatDialog,
    private readonly service: HotelService
    ) {

  }
  ngOnInit(): void {

  }

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // getHotel(){
  //    this.service.getHotel().subscribe(data =>{
  //     this.dataSource = new MatTableDataSource<PeriodicElement>(data);
  //   })
  // }

  editHotel(id:string){
      this.data = this.service.getHotelById(id)
      console.log(this.data)
      // this.openDialogEditHotel()
  }

  // openDialogRegisterHotel(): void {
  //   const dialogRef = this.dialog.open(ManageHotelModalComponent, {
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');

  //   });
  // }

  // openDialogEditHotel(): void {
  //   const dialogRef = this.dialog.open(ManageHotelModalComponent, {
  //     data: this.data
  //   });
  //   // console.log(this.data)
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');

  //   });
  // }
}

export interface PeriodicElement {
  id:string;
  nameHotel: string;
  city: string;
  ubication: string;
  price: number
}

