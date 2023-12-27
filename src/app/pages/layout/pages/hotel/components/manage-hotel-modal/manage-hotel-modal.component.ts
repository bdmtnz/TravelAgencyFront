import { Component, Inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LangService } from '../../../../../../shared/services/lang.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IHotel } from '../../hotel-modal';


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
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ManageHotelModalComponent>,

    ) {

      this.formRegister = this.formBuilder.group({
        name: ['',[Validators.required]],
        descripcion: ['',[Validators.required,Validators.maxLength(400)]],
        imageUrl: ['',[Validators.required]],
      });


  }
  ngOnInit(): void {
    this.previewImg()
    this.editHotel()
  }

  get TEXT() { return this.lang.current }

  previewImg(){
    this.formRegister.get('imageUrl')?.valueChanges.subscribe((value)=>{
      this.preview = value
    })
  }

  registerHotel(data: IHotel){
    if(this.formRegister.invalid) return
    this.dialogRef.close(data)
  }
  editHotel(){
    this.formRegister.controls['name'].setValue(this.data.name)
    this.formRegister.controls['descripcion'].setValue(this.data.descripcion)
    this.formRegister.controls['imageUrl'].setValue(this.data.imageUrl)
  }
}
