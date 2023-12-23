import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LangService } from '../../../../../../shared/services/lang.service';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-manage-hotel-modal',
  standalone: true,
  imports: 
  [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './manage-hotel-modal.component.html',
  styleUrl: './manage-hotel-modal.component.scss'
})
export class ManageHotelModalComponent {

  constructor(private readonly lang: LangService) {

    
  }

  get TEXT(){ return this.lang.current}
}
