import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChargingModel } from '../share/model/charging';
import { result } from '../share/model/result';

@Injectable({
  providedIn: 'root',
})
export class ChargingService {
  constructor(private http: HttpClient) {}

  getListCharging() {
    return this.http.get<result>('http://localhost:3000/charging-item');
  }
  getChargingByID(id) {
    return this.http.get<result>(
      `http://localhost:3000/list-item/${id}`
    );
  }
  deleteCharging(id) {
    return this.http.delete<result>(`http://localhost:3000/charging-item/${id}`);
  }

  getListLiveWallpaper() {
    return this.http.get<result>('http://localhost:3000/live-item');
  }
  getListchargingCategory() {
    return this.http.get<result>('http://localhost:3000/charging-category');
  }
  getListliveCategory() {
    return this.http.get<result>('http://localhost:3000/live-category');
  }

  export() {
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    let url = `${environment.baseUrl}/v1/assets/export-to-json`;
    this.http.get(url, { headers }).subscribe((res) => {
      console.log(res);
    });
  }
}
