import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { result } from '../share/model/result';

@Injectable({
  providedIn: 'root',
})
export class LiveCategoryService {
  constructor(private http: HttpClient) {}

  getListLiveCategory() {
    return this.http.get<any>(`${environment.baseUrl}/v1/categories?collectionTypeId=2`);
  }
  getLiveCategoryByID(id) {
    return this.http.get<result>(
      `${environment.baseUrl}/v1/categories/${id}`
    );
  }
  deleteLiveCategory(id) {
    return this.http.delete<result>(`${environment.baseUrl}/v1/categories/${id}`);
  }

  saveLiveCategory(model){
    return this.http.post<result>(`${environment.baseUrl}/LiveCategory-item/`, model);
  }
  export() {
    let url = `${environment.baseUrl}/v1/assets/export-json-files`;
    return this.http.get<result>(url);
  }
}
