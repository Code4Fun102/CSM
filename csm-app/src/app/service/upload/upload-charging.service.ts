import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UploadChargingService {
  constructor(private http: HttpClient) {}

  uploadData(data) {
    return this.http.post(`${environment.baseUrl}/v1/items/charging`, data);
  }
}
