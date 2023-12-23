import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-card-hotel',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './card-hotel.component.html',
  styleUrl: './card-hotel.component.scss'
})
export class CardHotelComponent {

}
