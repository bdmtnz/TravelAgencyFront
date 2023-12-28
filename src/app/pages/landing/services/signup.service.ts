import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../../shared/components/models/response';
import { environment } from '../../../../environments/environment';
import { ISignup } from '../models/signup-modal';




@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private readonly http: HttpClient) { }

  postSaveUser(request: ISignup): Observable<IApiResponse<any>>{
     return this.http.post<IApiResponse<any>>(`${environment.apiUrl}security/signup`, request)
  }
}
