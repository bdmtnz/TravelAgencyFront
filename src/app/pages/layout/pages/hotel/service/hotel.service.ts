import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { IHotel } from '../hotel-modal';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../../../../shared/components/models/response';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private readonly http: HttpClient) { }

  postHeotel(request: IHotel): Observable<IApiResponse<IHotel>>{
    return this.http.post<IApiResponse<IHotel>>(`${environment.apiUrl}`, request)
  }
}
