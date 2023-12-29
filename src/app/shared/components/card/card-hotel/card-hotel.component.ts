import { Component, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, CommonModule, CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-card-hotel',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    NgFor,
    CommonModule,
    CurrencyPipe,
  ],
  templateUrl: './card-hotel.component.html',
  styleUrl: './card-hotel.component.scss'
})


export class CardHotelComponent {
  @Input() imageUrl: string = ''
  @Input() location: string = ''
  @Input() city: string = ''
  @Input() price: number = 0
  @Input() hotel: string = '';
  @Input() quantityPeople: number = 0

  lista = [
    {
      name: "Hotel Metropolitano Plaza",
      minprice: 100000,
      descripcion: "El Kurakatá es un hotel luminoso situado en el centro de Valledupar y ofrece desayuno diario gratuito, restaurante y conexión Wi-Fi gratis.",
      imageurl: "https://businessblog.trivago.com/wp-content/uploads/2016/04/MainArticle.jpg"
    },
    {
      name: "Hotel Metropolitano Plaza",
      minprice: 100000,
      descripcion: "El Kurakatá es un hotel luminoso situado en el centro de Valledupar y ofrece desayuno diario gratuito, restaurante y conexión Wi-Fi gratis.",
      imageurl: "https://businessblog.trivago.com/wp-content/uploads/2016/04/MainArticle.jpg"
    },
    {
      name: "Hotel Metropolitano Plaza",
      minprice: 100000,
      descripcion: "El Kurakatá es un hotel luminoso situado en el centro de Valledupar y ofrece desayuno diario gratuito, restaurante y conexión Wi-Fi gratis.",
      imageurl: "https://businessblog.trivago.com/wp-content/uploads/2016/04/MainArticle.jpg"
    },
    {
      name: "Hotel Metropolitano Plaza",
      minprice: 100000,
      descripcion: "El Kurakatá es un hotel luminoso situado en el centro de Valledupar y ofrece desayuno diario gratuito, restaurante y conexión Wi-Fi gratis.",
      imageurl: "https://businessblog.trivago.com/wp-content/uploads/2016/04/MainArticle.jpg"
    },
    {
      name: "Hotel Metropolitano Plaza",
      minprice: 100000,
      descripcion: "El Kurakatá es un hotel luminoso situado en el centro de Valledupar y ofrece desayuno diario gratuito, restaurante y conexión Wi-Fi gratis.",
      imageurl: "https://businessblog.trivago.com/wp-content/uploads/2016/04/MainArticle.jpg"
    },
    {
      name: "Hotel Metropolitano Plaza",
      minprice: 100000,
      descripcion: "El Kurakatá es un hotel luminoso situado en el centro de Valledupar y ofrece desayuno diario gratuito, restaurante y conexión Wi-Fi gratis.",
      imageurl: "https://businessblog.trivago.com/wp-content/uploads/2016/04/MainArticle.jpg"
    }
  ]
}
