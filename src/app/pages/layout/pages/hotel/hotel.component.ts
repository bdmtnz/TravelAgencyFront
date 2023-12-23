import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ManageHotelModalComponent } from './components/manage-hotel-modal/manage-hotel-modal.component';


@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule
  ],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss'
})
export class HotelComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'room', 'enable', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /**
   *
   */
  constructor(public dialog: MatDialog) {

  }

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialogRegisterHotel(): void {
    const dialogRef = this.dialog.open(ManageHotelModalComponent, {

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  room: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen valledupar cesar ', room: "Piso 5 # 204" },
  { position: 1, name: 'Hydrogen', room: "1.0079" },
  { position: 1, name: 'Hydrogen', room: "1.0079" },
  { position: 1, name: 'Hydrogen', room: "1.0079" },
  { position: 1, name: 'Hydrogen', room: "1.0079" },


];

