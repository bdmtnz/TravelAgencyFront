import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IApiResponse } from '../components/models/response';
import { IBookingReponse } from '../models/booking.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private readonly http:HttpClient) { }

  getByTraveler(credentialId:string):Observable<IApiResponse<IBookingReponse[]>> {
    return this.http.get<IApiResponse<IBookingReponse[]>>(`${environment.apiUrl}/booking/traveler/${credentialId}`)
  }

  get():Observable<IApiResponse<IBookingReponse[]>> {
    return this.http.post<IApiResponse<IBookingReponse[]>>(`${environment.apiUrl}booking/filter`, {})
  }
}
