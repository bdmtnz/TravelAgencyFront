import { Component, Inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LangService } from '../../../../../../shared/services/lang.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-manage-hotel-modal',
  standalone: true,
  imports:
    [
      MatFormFieldModule,
      MatButtonModule,
      MatInputModule,
      ReactiveFormsModule,
      NgIf
    ],
  templateUrl: './manage-hotel-modal.component.html',
  styleUrl: './manage-hotel-modal.component.scss'
})
export class ManageHotelModalComponent implements OnInit {

  formRegister: FormGroup
  preview = 'https://img.freepik.com/foto-gratis/fondo_53876-32170.jpg?size=626&ext=jpg';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly lang: LangService,
    private formBuilder: FormBuilder

    ) {
      console.log(data)
      this.formRegister = this.formBuilder.group({
        name: [''],
        descripcion: [''],
        imageUrl: ['', ],
      });


  }
  ngOnInit(): void {
    this.previewImg()
  }

  get TEXT() { return this.lang.current }

  previewImg(){
    this.formRegister.get('imageUrl')?.valueChanges.subscribe((value)=>{
      this.preview = value
    })
  }

  registerHotel(data: FormGroup){

    console.log(data)
  }
}
