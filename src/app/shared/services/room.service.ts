import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../models/response';
import { IRoom } from '../models/booking.model';
import { environment } from '../../../environments/environment';
import { IFilterRoomRequest } from '../models/room.model';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private readonly http: HttpClient) { }

  getFreeRooms(filter: IFilterRoomRequest ): Observable<IApiResponse<IRoom[]>>{
    return this.http.post<IApiResponse<IRoom[]>>(`${environment.apiUrl}room/free`,filter)
  }
  getRooms(): Observable<IApiResponse<IRoom[]>>{
    return this.http.post<IApiResponse<IRoom[]>>(`${environment.apiUrl}room/filter`,{})
  }

}
