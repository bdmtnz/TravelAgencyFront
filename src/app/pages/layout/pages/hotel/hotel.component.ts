import { Component, } from '@angular/core';
import { CardHotelComponent } from './shared/card/card-hotel/card-hotel.component';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [CardHotelComponent, ],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss'
})
export class HotelComponent {

}
