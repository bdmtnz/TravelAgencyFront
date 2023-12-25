import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PeriodicElement } from '../hotel/hotel.component';

@Injectable({
  providedIn: 'root',

})
export class HotelService {

  constructor(private readonly http: HttpClient) { }


  getHotel() {
    let Observable = new Subject<PeriodicElement[]>()

    setTimeout(() => {
      Observable.next([
        { id: '1', name: 'Hydrogen valledupar cesar ', descripcion: "Piso 5 # 204vddddddddddddddadsadadsvvvvvvvvvvvvvvvvvvvvvvvvv", imageUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/04/13/16498369774107.jpg' },
        { id: '2', name: 'Hydrogen valledupar cesar ', descripcion: "Piso 5 # 204", imageUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/04/13/16498369774107.jpg' },
        { id: '3', name: 'Hydrogen valledupar cesar ', descripcion: "Piso 5 # 204", imageUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/04/13/16498369774107.jpg' },
        { id: '4', name: 'Hydrogen valledupar cesar ', descripcion: "Piso 5 # 204", imageUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/04/13/16498369774107.jpg' },
        { id: '5', name: 'Hydrogen valledupar cesar ', descripcion: "Piso 5 # 204", imageUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/04/13/16498369774107.jpg' },
      ])
    }, 1000)
    return Observable.asObservable()
  }

  getHotelById(id: string) {
    let list = [
      { id: '1', name: 'Hydrogen valledupar cesar ', descripcion: "Piso 1# 204vddddddddddddddadsadadsvvvvvvvvvvvvvvvvvvvvvvvvv", imageUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/04/13/16498369774107.jpg' },
      { id: '2', name: 'Hydrogen valledupar cesar ', descripcion: "Piso 2#Pisoasdasd", imageUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/04/13/16498369774107.jpg' },
      { id: '3', name: 'Hydrogen valledupar cesar ', descripcion: "Piso 3# 204", imageUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/04/13/16498369774107.jpg' },
      { id: '4', name: 'Hydrogen valledupar cesar ', descripcion: "Piso 4# Pisoasdasdadsa 5 # 204", imageUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/04/13/16498369774107.jpg' },
      { id: '5', name: 'Hydrogen valledupar cesar ', descripcion: "Piso 5# Piso asdasdasdasdadadasdas5 # 204", imageUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/04/13/16498369774107.jpg' },
    ]
    return list.find((item) => item.id == id)
  }
  getReservation() {
    let Observable = new Subject<any[]>()

    setTimeout(() => {
      Observable.next([
        {id: '1',
        start: '12/20/23',
        end: '14/20/23',
        enabled: true,
        quantityPeople: 5,
        price: 500000,
        client: {
          id: '1',
          name: 'Julio Camilo',
          lastName: 'Cesar carro',
          documentType: 'CC',
          document: '3333333',
          email: 'carloscorrea@gmail.com',
          phone: '300828838',
        },
        hotel: {
          name: ' aguas del cesar',
          descripcion: 'lorems'
        },
        room: {
          city: 'New York',
          location: 'piso 30 # 101',
          type: 'VIP',
          capacity: 5,
          cost: 100000,
          price: 200000
        }
        }
      ])
    }, 1000)
    return Observable.asObservable()
  }

  getReservationById(id: string) {
    let list = [
      {
        id: '1',
        start: '12/20/23',
        end: '14/20/23',
        enabled: true,
        quantityPeople: 5,
        price: 500000,
        client: {
          id: '1',
          name: 'Julio Camilo',
          lastName: 'Cesar carro',
          documentType: 'CC',
          document: '3333333',
          email: 'carloscorrea@gmail.com',
          phone: '300828838',
        },
        hotel: {
          name: ' aguas del cesar',
          descripcion: 'lorems'
        },
        room: {
          city: 'New York',
          location: 'piso 30 # 101',
          type: 'VIP',
          capacity: 5,
          cost: 100000,
          price: 200000
        }
      }
    ]
    return list.find((item) => item.id == id)
  }

}


