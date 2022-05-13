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
    return this.http.get<any>(`${environment.baseUrl}/v1/categories/${categoryId}/items`);
  }
  getChargingByID(id) {
    return this.http.get<result>(`${environment.baseUrl}/v1/items/${id}`);
  }
  deleteCharging(id) {
    return this.http.delete<result>(`${environment.baseUrl}/v1/items/${id}`);
  }
  updatePriority(id, priorityId) {
    return this.http.post<result>(`${environment.baseUrl}/v1/items/${id}/${priorityId}`,priorityId);
  }
  export() {
    let url = `${environment.baseUrl}/v1/assets/export-to-json`;
    this.http.get(url).subscribe((res) => {
      console.log(res);
    });
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
