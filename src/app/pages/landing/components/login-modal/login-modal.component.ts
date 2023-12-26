import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LangService } from '../../../../shared/services/lang.service';

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
    private formBuilder: FormBuilder
  ) {
    this.authentication = this.formBuilder.group({
      user: [''],
      password: ['']
    })
  }

  get TEXT() { return this.lang.current }

  login(){
    console.log(this.authentication.value)
  }
}
