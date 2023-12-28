import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IRoom } from '../../../../../../shared/models/booking.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-manage-room-modal',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgFor
  ],
  templateUrl: './manage-room-modal.component.html',
  styleUrl: './manage-room-modal.component.scss'
})
export class ManageRoomModalComponent implements OnInit {

  basicData!: FormGroup
  accountingData!: FormGroup
  image!: FormGroup
  preview = 'https://img.freepik.com/foto-gratis/fondo_53876-32170.jpg?size=626&ext=jpg';

  /**
   *
   */
  objetRoom!: IRoom
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ManageRoomModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    console.log(this.data)
    this.builder()
  }

  ngOnInit(): void {
    this.previewImg()
    this.dataInitial()
  }

  builder() {
    this.basicData = this.formBuilder.group({
      id:[''],
      hotelId: ['',[Validators.required, Validators.minLength(1)]],
      location: ['',[Validators.required]],
      city: ['',[Validators.required]],
      capacity: ['',[Validators.required]],
      type: ['',[Validators.required,Validators.minLength(1)]],
    });

    this.accountingData = this.formBuilder.group({
      cost: [,[Validators.required]],
      tax: [,[Validators.required]],
      profit: [,[Validators.required]],
      price: [],
    });
    this.image = this.formBuilder.group({
      imageUrl: ['',[Validators.required]],
    });
  }

  previewImg() {
    this.image.get('imageUrl')?.valueChanges.subscribe((value) => {
      this.preview = value
    })
  }
  dataInitial(){
    this.basicData.controls['id'].setValue(this.data.data.id)
    this.basicData.controls['hotelId'].setValue(this.data.data.hotelId)
    this.basicData.controls['location'].setValue(this.data.data.location)
    this.basicData.controls['city'].setValue(this.data.data.city)
    this.basicData.controls['capacity'].setValue(this.data.data.capacity)
    this.basicData.controls['type'].setValue(this.data.data.type)
    this.accountingData.controls['cost'].setValue(this.data.data.cost)
    this.accountingData.controls['tax'].setValue(this.data.data.tax)
    this.accountingData.controls['profit'].setValue(this.data.data.profit)
    this.accountingData.controls['price'].setValue(this.data.data.price)
    this.image.controls['imageUrl'].setValue(this.data.data.imageUrl)
  }


  saveRoom() {
    // console.log("SAVE", this.data )
    this.basicData.markAllAsTouched()
    this.accountingData.markAllAsTouched()
    this.image.markAllAsTouched()

    if (this.basicData.invalid || this.accountingData.invalid  || this.image.invalid) return
    this.objetRoom = {
      ...this.basicData.value,
      ...this.accountingData.value,
      ...this.image.value

    }
    this.dialogRef.close(this.objetRoom)
  }

}
