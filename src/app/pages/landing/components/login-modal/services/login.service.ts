import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../../../../shared/components/models/response';
import { ILoginRequest, ILoginResponse } from '../login.model';
import { environment } from '../../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }

  authentication(request: ILoginRequest): Observable<IApiResponse<ILoginResponse>>{
    console.log(request)
     return this.http.post<IApiResponse<ILoginResponse>>(`${environment.apiUrl}`, request)
  }



}
