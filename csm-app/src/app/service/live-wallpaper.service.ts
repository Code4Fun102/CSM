import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { result } from '../share/model/result';

@Injectable({
  providedIn: 'root',
})
export class LiveWallPaperService {

  constructor(private http: HttpClient) {
  }
  getListLiveWallPaper(caregoryId?: number) {
    return this.http.get<any>(`${environment.baseUrl}/v1/categories/${caregoryId}/items`);
  }
  getLiveWallPaperByID(id) {
    return this.http.get<result>(`${environment.baseUrl}/v1/items/${id}`);
  }
  deleteLiveWallPaper(id) {
    return this.http.delete<result>(`${environment.baseUrl}/v1/items/${id}`);
  }
  updatePriority(id, data) {
    return this.http.put<result>(`${environment.baseUrl}/v1/items/charging/${id}`, data);
  }
  saveLiveWallPaper(model) {
    return this.http.post<result>(`${environment.baseUrl}/LiveWallPaper/`, model);
  }
  export() {
    let url = `${environment.baseUrl}/v1/assets/export-json-files`;
    return this.http.get<result>(url);
  }
}
