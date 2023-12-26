import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { SignupService } from './service/signup.service';
import { ISelectOption, ISignup } from './signup-modal';
import { NgFor } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup-modal',
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
  providers: [
    {provide: DateAdapter, useClass: NativeDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS},
  ],
  templateUrl: './signup-modal.component.html',
  styleUrl: './signup-modal.component.scss'
})
export class SignupModalComponent implements OnInit {

  basicData!: FormGroup;
  contacData!: FormGroup;
  objetUserRegister!: ISignup;
  listDocumentType: ISelectOption[] = []
  listGendersType: ISelectOption[] = []

  constructor(private formBuilder: FormBuilder,
     private readonly service: SignupService,
     private _snackBar: MatSnackBar,
     ) {
    this.builder()
  }
  ngOnInit(): void {
    this.getSelectOpcion()
  }

  builder(){
    this.basicData = this.formBuilder.group({
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      documentType: [0,[Validators.required]],
      document: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      birth: [Date,[Validators.required]]
    })
    this.contacData = this.formBuilder.group({
        phone: ['',[Validators.required]],
        indicative: [0,[Validators.required]],
        email: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.minLength(8)]]
    })
  }
  getSelectOpcion(){
    this.service.getDocumentType().subscribe(opntion => {
      this.listDocumentType = opntion.data.documentTypes
      this.listGendersType = opntion.data.genders
    })
  }


  saveUser(){
    this.objetUserRegister = {
      ...this.basicData.value,
      ...this.contacData.value
    }
    this.service.postSaveUser(this.objetUserRegister).subscribe(data => {

    })
  }
  

}
