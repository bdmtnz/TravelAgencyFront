import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ManageHotelModalComponent } from './components/manage-hotel-modal/manage-hotel-modal.component';
import { HotelService } from '../services/hotel.service';


@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    
  ],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss',

})
export class HotelComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['position','name', 'room', 'enable', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  data: any ;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  constructor(
    public dialog: MatDialog,
    private readonly service: HotelService
    ) {

  }
  ngOnInit(): void {
    this.getHotel()
  }

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getHotel(){
     this.service.getHotel().subscribe(data =>{
      this.dataSource = new MatTableDataSource<PeriodicElement>(data);
    })
    // this.data = 
  }

  editHotel(data:any){
    this.data = data;
    console.log(this.data)
  }

  openDialogRegisterHotel(): void {
    const dialogRef = this.dialog.open(ManageHotelModalComponent, {
      data: this.data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}

export interface PeriodicElement {
  id:string;
  name: string;
  position: number;
  room: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
];

