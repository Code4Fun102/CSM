import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { result } from '../share/model/result';

@Injectable({
  providedIn: 'root',
})
export class VersionService {

  constructor(private http: HttpClient) {
  }

  getListVersion() {
    return this.http.get<any>(`${environment.baseUrl}/v1/assets/versions`);
  }
}