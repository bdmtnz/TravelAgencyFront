import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LocalDbPersist } from '../../services/db.service';
import { ILoginResponse } from '../../../pages/landing/models/login.model';
import { DB_FLAGS } from '../../models/db.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Output() toggleFn = new EventEmitter<void>()

  constructor(private readonly router:Router) { }

  get credential() {
    return LocalDbPersist<ILoginResponse>().get(DB_FLAGS.CREDENTIAL)
  }

  toggle() {
    this.toggleFn.emit()
  }

  logout(){
    LocalDbPersist<ILoginResponse>().remove(DB_FLAGS.CREDENTIAL)
    this.router.navigateByUrl('')
  }
}
