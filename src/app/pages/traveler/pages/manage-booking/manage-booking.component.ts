import { Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { IBookingReponse } from '../../../../shared/models/booking.model';
import { ILoginResponse } from '../../../landing/models/login.model';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DB_FLAGS } from '../../../../shared/models/db.model';
import { BookingService } from '../../../../shared/services/booking.service';
import { LocalDbPersist } from '../../../../shared/services/db.service';
import { SignupModalComponent } from '../../../../shared/components/signup-modal/signup-modal.component';
import { ISignup, ISignupRequestModal } from '../../../../shared/models/signup-modal';
import { ISelectOption } from '../../../../shared/models/response';
import * as Model from './manage-booking.model';
import { SignupService } from '../../../../shared/components/signup-modal/service/signup.service';

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
  rooms = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  genders: ISelectOption[] = []

  constructor(
    private readonly _signup: SignupService,
    public dialog: MatDialog,
    private readonly router: Router
  ) { 
    this.dataSource = new MatTableDataSource<ISignup>()
    this.credential = LocalDbPersist<ILoginResponse>().get(DB_FLAGS.CREDENTIAL) ?? { id: 'n/a' } as ILoginResponse
  }

  ngOnInit(): void {
    this._signup.getTypes().subscribe(option => {
      this.genders = option.data["genders"]
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getBookingById(id:string){
    this.router.navigateByUrl(`/traveler/booking/${id}`)
  }

  getGender(genderId: number) {
    let gender = this.genders.find(gender => gender.id == genderId)
    return gender ? gender.name : 'N/A'
  }

  manageGuest(guest?:ISignup) {
    const dialogRef = this.dialog.open(SignupModalComponent, {
      data: Model.Utils.GetModalParamsGuest(guest)
    })
    dialogRef.afterClosed().subscribe(
      (value:ISignup|null) => {
        if(!value) return
        this.dataSource.data.push(value)
        this.dataSource._updateChangeSubscription()
      }
    )
  }

  remove(guest:ISignup) {
    let index = this.dataSource.data.findIndex(row => row.document == guest.document)
    this.dataSource.data.splice(index, 1)
    this.dataSource._updateChangeSubscription()
  }
}

