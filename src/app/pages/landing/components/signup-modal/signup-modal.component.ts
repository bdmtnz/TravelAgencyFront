import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ISignup } from './signup-modal';

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
    MatNativeDateModule
  ],
  providers: [
    {provide: DateAdapter, useClass: NativeDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS},
  ],
  templateUrl: './signup-modal.component.html',
  styleUrl: './signup-modal.component.scss'
})
export class SignupModalComponent {

  basicData!: FormGroup;
  contacData!: FormGroup;
  objetUserRegister!: ISignup;
  constructor(private formBuilder: FormBuilder, private readonly service: SignupService) {
    this.builder()
  }

  builder(){
    this.basicData = this.formBuilder.group({
      name: [''],
      lastName: [''],
      documentType: [0],
      document: [''],
      gender: [''],
      birth: [Date]
    })
    this.contacData = this.formBuilder.group({
        phone: [''],
        indicative: [0],
        email: [''],
        password: ['']
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
