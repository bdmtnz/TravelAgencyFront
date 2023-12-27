import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { LocalDbPersist } from '../../shared/services/db.service';
import { ILoginRequest, ILoginResponse } from '../landing/models/login.model';
import { DB_FLAGS } from '../../shared/models/db.model';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ToolbarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
