import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../../../../shared/models/response';
import { IStadisticCards } from '../../../../../shared/models/card-state.model';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardStateService {

  constructor(private http: HttpClient) {}
  
  getStadistic(): Observable<IApiResponse<IStadisticCards>>{
    return this.http.get<IApiResponse<IStadisticCards>>(`${environment.apiUrl}stadistic/home`)

  }
}
