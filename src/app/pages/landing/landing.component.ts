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
import { INIT_SIGNUP } from './models/signup-modal';
import { ROL_REDIRECT } from '../../app.routes.permission';
import { LocalDbPersist } from '../../shared/services/db.service';
import { ILoginResponse } from './models/login.model';
import { DB_FLAGS } from '../../shared/models/db.model';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ToolbarComponent
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
  ) {
    var credential = LocalDbPersist<ILoginResponse>().get(DB_FLAGS.CREDENTIAL)
    if(credential) {
      this.router.navigateByUrl(ROL_REDIRECT[credential.rol.id])
    }
  }

  openDialogLogin(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      this.loginService.authentication(result).subscribe(data => {
        if (data.status != 200) {
          this._snackBar.open(data.message, 'cerrar', {
            duration: 3000
          })
          return
        }
        this.router.navigateByUrl(ROL_REDIRECT[data.data.rol.id])
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
    });
  }

  openDialogConfirmation() {
    const dialogRef = this.dialog.open(InfoModalComponent, {
      data: {
        title: "Atención",
        descripcion: "¿Esta seguro que desea guardar sus datos?",
        btnTitle: "Sí, continuar",
        icon: "info"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.openDialogRegistrar()
        return
      }
      this.signupService.postSaveUser(this.dataClient).subscribe(data => {
        if (data.status != 200) return
        const dialogRef = this.dialog.open(InfoModalComponent, {
          data: {
            title: "Atención",
            descripcion: "Se ha Registrado exitosamente",
            btnTitle: "aceptar",
            icon: "info"
          }
        });
        this.dataClient = INIT_SIGNUP
        dialogRef.afterClosed().subscribe(result => {});
      })
    });
  }
}
