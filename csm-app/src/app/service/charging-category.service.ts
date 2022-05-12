import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChargingModel } from '../share/model/charging';
import { ChargingCategoryModel } from '../share/model/ChargingCategory';
import { result } from '../share/model/result';

@Injectable({
  providedIn: 'root',
})
export class ChargingCategoryService {
  constructor(private http: HttpClient) {}

  getListChargingCategory() {
    return this.http.get<any>(`${environment.baseUrl}/v1/assets/categories?collectionTypeId=1`);
  }
  
  getChargingCategoryByID(id) {
    return this.http.get<result>(
      `${environment.baseUrl}/v1/categories/${id}`
    );
  }
  deleteChargingCategory(id) {
    return this.http.delete<result>(`${environment.baseUrl}/v1/categories/${id}`);
  }

  saveChargingCategory(model: ChargingCategoryModel, id){
    const dataSave = {
      links: JSON.stringify(model.links),
      icon: JSON.stringify(model.icon),
      name: model.name,
      background: JSON.stringify(model.background)
    }
    return this.http.put<result>(`${environment.baseUrl}/v1/categories/${id}`, dataSave);
  }
}
