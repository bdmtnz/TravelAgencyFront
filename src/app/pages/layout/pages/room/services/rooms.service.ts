import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse, ISelectOption } from '../../../../../shared/components/models/response';
import { IRoom } from '../../../../../shared/models/booking.model';
import { environment } from '../../../../../../environments/environment';
import { IManageRoomRequest } from '../../../../../shared/models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private readonly http: HttpClient) { }

  getBooking():Observable<IApiResponse<IRoom[]>> {
    return this.http.post<IApiResponse<IRoom[]>>(`${environment.apiUrl}room/filter`, {})
  }
  getDocumentType(): Observable<IApiResponse<any>>{
    return this.http.get<IApiResponse<any>>(`${environment.apiUrl}Type/signup`)
  }
  getRoomType(): Observable<IApiResponse<ISelectOption>>{
    return this.http.get<IApiResponse<ISelectOption>>(`${environment.apiUrl}type/room`)
  }
  postRoom(request: IManageRoomRequest): Observable<IApiResponse<IManageRoomRequest>>{
    return this.http.post<IApiResponse<IManageRoomRequest>>(`${environment.apiUrl}Room`, request)
  }
  getRooms(): Observable<IApiResponse<IRoom[]>>{
    return this.http.post<IApiResponse<IRoom[]>>(`${environment.apiUrl}room/filter`,{})
  }
}
