import { Component } from '@angular/core';
import { CardHotelComponent } from '../hotel/shared/card/card-hotel/card-hotel.component';

@Component({
  selector: 'app-search-hotel',
  standalone: true,
  imports: [CardHotelComponent],
  templateUrl: './search-hotel.component.html',
  styleUrl: './search-hotel.component.scss'
})
export class SearchHotelComponent {

}
