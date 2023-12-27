import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { SignupService } from './service/signup.service';
import { NgFor } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISelectOption } from '../../../../shared/components/models/response';
import { ISignup } from '../../models/signup-modal';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InfoModalComponent } from '../../../../shared/components/info-modal/info-modal.component';

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
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
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
    public dialogRef: MatDialogRef<SignupModalComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    this.builder()
  }
  ngOnInit(): void {
    this.getSelectOpcion()
    this.dataInitial()
  }

  builder() {
    this.basicData = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      documentType: [, [Validators.required, Validators.minLength(1)]],
      document: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      birth: [Date, [Validators.required]]
    })
    this.contacData = this.formBuilder.group({
      phone: ['', [Validators.required]],
      indicative: [, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  dataInitial(){
    this.basicData.controls['name'].setValue(this.data.name)
    this.basicData.controls['lastName'].setValue(this.data.lastName)
    this.basicData.controls['documentType'].setValue(this.data.documentType)
    this.basicData.controls['document'].setValue(this.data.document)
    this.basicData.controls['gender'].setValue(this.data.gender)
    this.basicData.controls['birth'].setValue(this.data.birth)
    this.contacData.controls['phone'].setValue(this.data.phone)
    this.contacData.controls['indicative'].setValue(this.data.indicative)
    this.contacData.controls['password'].setValue(this.data.password)
    this.contacData.controls['email'].setValue(this.data.email)
  }

  getSelectOpcion() {
    this.service.getDocumentType().subscribe(option => {
      this.listDocumentType = option.data.documentTypes
      this.listGendersType = option.data.genders
    })
  }

  close() {
    this.basicData.markAllAsTouched()
    this.contacData.markAllAsTouched()
    if (this.basicData.invalid && this.contacData.invalid) return
    this.objetUserRegister = {
      ...this.basicData.value,
      ...this.contacData.value
    }
    this.dialogRef.close(this.objetUserRegister)
  }


}
