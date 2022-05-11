import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChargingModel } from '../share/model/charging';
import { result } from '../share/model/result';

@Injectable({
  providedIn: 'root',
})
export class ChargingCategoryService {
  constructor(private http: HttpClient) {}

  getListChargingCategory() {
    return this.http.get<any>('http://localhost:3000/charging-Category');
  }
  getChargingCategoryByID(id) {
    return this.http.get<result>(
      `http://localhost:3000/list-Category/${id}`
    );
  }
  deleteChargingCategory(id) {
    return this.http.delete<result>(`http://localhost:3000/charging-Category/${id}`);
  }

  saveChargingCategory(model){
    return this.http.post<result>(`http://localhost:3000/charging-Category/`, model);
  }
}
