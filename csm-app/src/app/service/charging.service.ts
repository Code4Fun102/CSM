import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { result } from '../share/model/result';

@Injectable({
  providedIn: 'root',
})
export class ChargingService {

  constructor(private http: HttpClient) {
  }
  
  getListCharging(categoryId?: number) {
    return this.http.get<any>(`${environment.baseUrl}/v1/assets/categories/${categoryId}/items`);
  }
  getChargingByID(id) {
    return this.http.get<result>(`${environment.baseUrl}/v1/assets/items/${id}`);
  }
  deleteCharging(id) {
    return this.http.delete<result>(`${environment.baseUrl}/v1/assets/categories/${id}`);
  }

  // getListLiveWallpaper() {
  //   return this.http.get<result>(`${environment.baseUrl}/v1/assets/categories/2/items`);
  // }

  // getListliveCategory() {
  //   return this.http.get<result>(`${environment.baseUrl}/live-category`);
  // }

  export() {
    let url = `${environment.baseUrl}/v1/assets/export-to-json`;
    this.http.get(url).subscribe((res) => {
      console.log(res);
    });
  }

  saveCharging(model) {
    return this.http.post<result>(`${environment.baseUrl}charging-item/`, model);
  }
}
