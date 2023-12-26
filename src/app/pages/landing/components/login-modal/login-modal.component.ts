import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LangService } from '../../../../shared/services/lang.service';
import { LoginService } from './services/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {

  authentication: FormGroup
  constructor(
    private readonly lang: LangService,
    private readonly services: LoginService,
    private formBuilder: FormBuilder,
    private readonly router: Router,
    public dialogRef: MatDialogRef<LoginModalComponent>,
    private _snackBar: MatSnackBar
  ) {
    this.authentication = this.formBuilder.group({
      user: [''],
      password: ['']
    })
  }

  get TEXT() { return this.lang.current }

  login(){
    this.services.authentication(this.authentication.value).subscribe(data => {
      
        if(data.status==200){
          this.router.navigateByUrl(`/layout`)
          this.dialogRef.close();
        }
        else {
            this._snackBar.open(data.message,'cerrar',{
              duration: 3000
            })
        }
      
    })

  }
}
