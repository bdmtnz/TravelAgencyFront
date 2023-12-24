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
        { position: 1, id: '1', name: 'Hydrogen valledupar cesar ', room: "Piso 5 # 204" },
        { position: 1, id: '2', name: 'Hydrogen', room: "1.0079" },
        { position: 1, id: '3', name: 'Hydrogen', room: "1.0079" },
        { position: 1, id: '4', name: 'Hydrogen', room: "1.0079" },
        { position: 1, id: '5', name: 'Hydrogen', room: "1.0079" },
      ])
    }, 2000)
    return Observable.asObservable()
  }

  getHotelById(id: string) {

    let list = [
      { position: 1, id: '1', name: 'Hydrogen valledupar cesar ', room: "Piso 5 # 204" },
      { position: 1, id: '2', name: 'Hydrogen', room: "1.0079" },
      { position: 1, id: '3', name: 'Hydrogen', room: "1.0079" },
      { position: 1, id: '4', name: 'Hydrogen', room: "1.0079" },
      { position: 1, id: '5', name: 'Hydrogen', room: "1.0079" },
    ]

      return list.find((item)=> item.id == id)
    
  }

}


