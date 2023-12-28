import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    MatNativeDateModule
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
  constructor(private formBuilder: FormBuilder) {
    this.builder()
  }

  ngOnInit(): void {
    this.previewImg()
  }

  builder() {
    this.basicData = this.formBuilder.group({
      hotel: [''],
      location: [''],
      city: [''],
      capacity: [''],
      type: [''],
    });

    this.accountingData = this.formBuilder.group({
      cost: [0],
      tax: [0],
      profit: [0],
      price: [0],
    });
    this.image = this.formBuilder.group({
      imageUrl: [''],
    });
  }

  previewImg() {
    this.image.get('imageUrl')?.valueChanges.subscribe((value) => {
      this.preview = value
    })
  }
}
