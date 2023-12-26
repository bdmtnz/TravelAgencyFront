import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../../../../../shared/components/models/response';
import { Observable } from 'rxjs';
import { ISignup } from '../signup-modal';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private readonly http: HttpClient) { }

  postSaveUser(request: ISignup): Observable<IApiResponse<any>>{
    console.log(request)
     return this.http.post<IApiResponse<any>>(`${environment.apiUrl}security/signup`, request)
  }
  getDocumentType(): Observable<IApiResponse<any>>{
    return this.http.get<IApiResponse<any>>(`${environment.apiUrl}Type/signup`)

  }
}
