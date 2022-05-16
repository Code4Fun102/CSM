import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChargingModel } from '../share/model/charging';
import { result } from '../share/model/result';

@Injectable({
  providedIn: 'root',
})
export class ChargingService {

  constructor(private http: HttpClient) {
  }
  
  getListCharging(categoryId?: number) {
    return this.http.get<{data: {datas: ChargingModel[], idName: string}}>(`${environment.baseUrl}/v1/categories/${categoryId}/items`);
  }
  getChargingByID(id) {
    return this.http.get<result>(`${environment.baseUrl}/v1/items/${id}`);
  }
  deleteCharging(id) {
    return this.http.delete<result>(`${environment.baseUrl}/v1/items/${id}`);
  }
  updatePriority(id, data) {
    return this.http.put<result>(`${environment.baseUrl}/v1/items/charging/${id}`,data);
  }
  export() {
    let url = `${environment.baseUrl}/v1/assets/export-json-files`;
    return this.http.get<result>(url);
  }

  saveCharging(model, id) {
    return this.http.post<result>(`${environment.baseUrl}charging-item/`, model);
  }

  saveChargingCategory(model: ChargingModel, id){
    if(!id){
      return this.http.post<result>(`${environment.baseUrl}/v1/categories`, model);
    }
    return this.http.put<result>(`${environment.baseUrl}/v1/categories/${id}`, model);
  }
}
