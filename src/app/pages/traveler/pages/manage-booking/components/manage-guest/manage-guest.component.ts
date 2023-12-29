import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import * as Model from './manage-guest.utils';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IManageGuestRequest } from '../../models/manage-guest.model';


@Component({
  selector: 'app-manage-guest',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './manage-guest.component.html',
  styleUrl: './manage-guest.component.scss'
})
export class ManageGuestComponent {
  guestForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: IManageGuestRequest,
    public dialogRef: MatDialogRef<ManageGuestComponent>,
  ) {
    this.guestForm = Model.Utils.BuildForm(this.formBuilder, data)
  }
}

