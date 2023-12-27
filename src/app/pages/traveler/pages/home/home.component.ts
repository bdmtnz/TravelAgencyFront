import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { PeriodicElement } from '../../../layout/pages/booking/booking.component';

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
export class HomeComponent {
  displayedColumns: string[] = [
    'nameHotel',
    'nameClient',
    'ubication',
    // 'typeReservation',
    'dateInit',
    'dateEnd',
    'city',
    // 'valueReservation',
    'valueReservation',
    'action'
  ];
  dataSource = new MatTableDataSource<PeriodicElement>();
  data: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    public dialog: MatDialog,
    // private readonly service: HotelService,
    private readonly router: Router
  ) {

  }
  ngOnInit(): void {
    // this.getHotel()
    // this.getReservation()
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // getReservation(){
  //   this.service.getReservation().subscribe( data =>{
  //     this.dataSource = new MatTableDataSource<any>(data);
  //     console.log(this.dataSource.data)
  //   }) 
  // }
  getReservationById(id:string){
    this.router.navigateByUrl(`/layout/booking/${id}`)
    // let value=this.service.getReservationById(id)
    // console.log(value)
  }
}
