import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LangService } from '../../../../shared/services/lang.service';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,MatInputModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {

  /**
   *
   */
  constructor(private readonly lang: LangService) {

    
  }

  get TEXT(){ return this.lang.current}
}
