import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../../../../shared/components/models/response';
import { IRoom } from '../../../../../shared/models/booking.model';
import { environment } from '../../../../../../environments/environment';

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
}
