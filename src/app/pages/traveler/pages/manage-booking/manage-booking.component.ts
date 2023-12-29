import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, DateAdapter, NativeDateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IBookingReponse, IBookingRequest, IHotel, IRoom } from '../../../../shared/models/booking.model';
import { ILoginResponse } from '../../../landing/models/login.model';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DB_FLAGS } from '../../../../shared/models/db.model';
import { LocalDbPersist } from '../../../../shared/services/db.service';
import { SignupModalComponent } from '../../../../shared/components/signup-modal/signup-modal.component';
import { IResponseModal, ISignup } from '../../../../shared/models/signup-modal';
import { ISelectOption } from '../../../../shared/models/response';
import * as Model from './manage-booking.model';
import { SignupService } from '../../../../shared/components/signup-modal/service/signup.service';
import { CardHotelComponent } from '../../../../shared/components/card/card-hotel/card-hotel.component';
import { RoomService } from '../../../../shared/services/room.service';
import { BookingService } from '../../../../shared/services/booking.service';
import { InfoModalComponent } from '../../../../shared/components/info-modal/info-modal.component';
import { IInfoModalRequest } from '../../../../shared/models/info-modal.model';

@Component({
  selector: 'app-manage-booking',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    CardHotelComponent
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
  ],
  templateUrl: './manage-booking.component.html',
  styleUrl: './manage-booking.component.scss'
})
export class ManageBookingComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  emergencyForm!: FormGroup
  filterRequestRooms!: FormGroup
  dataSource: MatTableDataSource<ISignup>
  credential: ILoginResponse
  displayedColumns: string[] = [
    'document',
    'name',
    'lastName',
    'gender',
    'phone',
    'action'
  ];
  data: any;
  rooms: IRoom[] = []
  selectionRoom: IRoom
  genders: ISelectOption[] = []

  constructor(
    private readonly _signup: SignupService,
    public dialog: MatDialog,
    private readonly router: Router,
    private formBuilder: FormBuilder,
    private readonly freeRoomsService: RoomService,
    private readonly _booking: BookingService
  ) {
    this.dataSource = new MatTableDataSource<ISignup>()
    this.credential = LocalDbPersist<ILoginResponse>().get(DB_FLAGS.CREDENTIAL) ?? { id: 'n/a' } as ILoginResponse
    this.selectionRoom = {
      hotel: {
        name: 'Hotel SAS.'
      } as IHotel,
      id: 'Hotel SAS.'
    } as IRoom
  }

  ngOnInit(): void {
    this.builder()
    this._signup.getTypes().subscribe(option => {
      this.genders = option.data["genders"]
    })
    this.filterRooms()
    this.getRooms()
  }

  builder() {
    this.filterRequestRooms = this.formBuilder.group({
      city: [''],
      quantityPeople: [0],
      start: [Date],
      end: [Date]
    })
    this.emergencyForm = this.formBuilder.group({
      indicative: [null, [Validators.required, Validators.min(1), Validators.maxLength(4)]],
      phone: [null, [Validators.required]],
      name: [null, [Validators.required]]
    })
  }

  filterRooms(){
    this.freeRoomsService.getFreeRooms(this.filterRequestRooms.value).subscribe(resp => {
      this.rooms = resp.data
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getBookingById(id:string){
    this.router.navigateByUrl(`/traveler/booking/${id}`)
  }

  manage() {
    let request: IBookingRequest = {
      roomId: this.selectionRoom.id,
      credentialId: this.credential.id,
      ...this.emergencyForm.value,
      ...this.filterRequestRooms.value,
      guests: this.dataSource.data
    }
    this._booking.post(request).subscribe(response => {
      let modalParams: IInfoModalRequest = {
        title: 'Atención',
        description: response.message,
        icon: "info",
        btnTitle: 'Aceptar'
      }
      const dialogRef = this.dialog.open(InfoModalComponent, {
        data: modalParams
      })
      dialogRef.afterClosed().subscribe((resp => {
        if(response.status != 200) this.router.navigateByUrl(`/traveler`)
      }))
    })
  }

  getRooms() {
    this.freeRoomsService.getRooms().subscribe(resp => {
      this.rooms = resp.data
    })
  }

  getGender(genderId: number) {
    let gender = this.genders.find(gender => gender.id == genderId)
    return gender ? gender.name : 'N/A'
  }

  manageGuest(guest?: ISignup) {
    const dialogRef = this.dialog.open(SignupModalComponent, {
      data: Model.Utils.GetModalParamsGuest(guest)
    })
    dialogRef.afterClosed().subscribe(
      (value: IResponseModal<ISignup> | null) => {
        if (!value) return
        if (value.dispatcher != 'OK') return
        let index = this.dataSource.data.findIndex(row => row.document == value.content.document)
        if (value.mode == 'ADD' && index == -1) this.dataSource.data.push(value.content)
        else {
          this.dataSource.data.splice(index)
          this.dataSource.data.push(value.content)
        }
        this.dataSource._updateChangeSubscription()
      }
    )
  }

  remove(guest: ISignup) {
    let index = this.dataSource.data.findIndex(row => row.document == guest.document)
    this.dataSource.data.splice(index, 1)
    this.dataSource._updateChangeSubscription()
  }
}

