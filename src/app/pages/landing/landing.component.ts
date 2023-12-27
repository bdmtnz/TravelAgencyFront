import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { SignupModalComponent } from './components/signup-modal/signup-modal.component';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupService } from './services/signup.service';
import { InfoModalComponent } from '../../shared/components/info-modal/info-modal.component';
import { INIT_SIGNUP, ISignup } from './models/signup-modal';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  dataClient = INIT_SIGNUP

  constructor(
    public dialog: MatDialog,
    private readonly loginService: LoginService,
    private readonly signupService: SignupService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  openDialogLogin(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {

    });
    dialogRef.afterClosed().subscribe(result => {
      this.loginService.authentication(result).subscribe(data => {
        if (data.status != 200) {
          this._snackBar.open(data.message, 'cerrar', {
            duration: 3000
          })
          return
        }
        this.router.navigateByUrl(`/layout`)
      })
    });
  }

  openDialogRegistrar(): void {
    const dialogRef = this.dialog.open(SignupModalComponent, {
      data: this.dataClient
    });
    dialogRef.afterClosed().subscribe(result => {
      
      if (result) {
        this.openDialogConfirmation()
        this.dataClient = result
        return
      }
      
      // this.signupService.postSaveUser(result).subscribe(data => {
      //   console.log(result)
      // })

    });
  }

  openDialogConfirmation() {
    const dialogRef = this.dialog.open(InfoModalComponent, {
      data:{
        title:"Atención",
        descripcion:"¿Esta seguro que desea guardar sus datos?",
        btnTitle:"Si, registrar",
        icon:"info"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.openDialogRegistrar()
        return
      }
      this.signupService.postSaveUser(this.dataClient).subscribe(data => {
        console.log("response backEnd",data)
        this.dataClient = INIT_SIGNUP
      })

    });
  }



}
