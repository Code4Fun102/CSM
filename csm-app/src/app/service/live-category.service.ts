import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { result } from '../share/model/result';

@Injectable({
  providedIn: 'root',
})
export class LiveCategoryService {
  constructor(private http: HttpClient) {}

  getListLiveCategory() {
    return this.http.get<any>('http://localhost:3000/LiveCategory-item');
  }
  getLiveCategoryByID(id) {
    return this.http.get<result>(
      `http://localhost:3000/LiveCategory/${id}`
    );
  }
  deleteLiveCategory(id) {
    return this.http.delete<result>(`http://localhost:3000/LiveCategory-item/${id}`);
  }

  saveLiveCategory(model){
    return this.http.post<result>(`http://localhost:3000/LiveCategory-item/`, model);
  }
}
