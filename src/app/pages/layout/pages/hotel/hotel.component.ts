import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ManageHotelModalComponent } from './components/manage-hotel-modal/manage-hotel-modal.component';
import { IHotel, INIT_HOTEL } from './hotel-modal';
import { InfoModalComponent } from '../../../../shared/components/info-modal/info-modal.component';
import { HotelService } from './service/hotel.service';


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
  dataSource = new MatTableDataSource<IHotel>();
  data: any ;
  dataManageHotel = INIT_HOTEL
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
     this.service.getHotel({}).subscribe(resp =>{
      this.dataSource = new MatTableDataSource<IHotel>(resp.data);
    })
  }

  editHotel(id:string){
     this.service.getHotelById(id).subscribe( response => {
      this.openDialogEditHotel(response.data)
      })
  }

  openDialogRegisterHotel(): void {
    const dialogRef = this.dialog.open(ManageHotelModalComponent, {
      data: this.dataManageHotel
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataManageHotel = result
        this.openDialogConfirmation()
      }
    
    });
  }
  openDialogConfirmation() {
    const dialogRef = this.dialog.open(InfoModalComponent, {
      data: {
        title: "Atención",
        descripcion: "¿Esta seguro que desea guardar un nuevo hotel?",
        btnTitle: "Guardar",
        icon: "info"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.openDialogRegisterHotel()
        return
      }
      this.service.postHotel(this.dataManageHotel).subscribe(data => {
        if (data.status != 200) {
          const dialogRef = this.dialog.open(InfoModalComponent, {
            data: {
              title: "Atención",
              descripcion: "Error al registrar un nuevo hotel",
              btnTitle: "aceptar",
              icon: "warning"
            }
          });
          dialogRef.afterClosed().subscribe(result => {

          });
          return
        }
        const dialogRef = this.dialog.open(InfoModalComponent, {
          data: {
            title: "Atención",
            descripcion: "Se ha Registrado exitosamente",
            btnTitle: "aceptar",
            icon: "info"
          }
        });
        this.dataManageHotel = INIT_HOTEL
        dialogRef.afterClosed().subscribe(result => {
          this.getHotel()
        });
        
      })

    });
  }

  openDialogEditHotel(data:IHotel[]): void {
    const dialogRef = this.dialog.open(ManageHotelModalComponent, {
      data: {
        data,
        title: "Editar hotel",
        button: "Guardar"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.service.postHotel(result).subscribe( data => { 

      })
    });
  }
}



// const ELEMENT_DATA: PeriodicElement[] = [
  
// ];

