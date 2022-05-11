import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChargingModel } from '../share/model/charging';
import { result } from '../share/model/result';

@Injectable({
  providedIn: 'root',
})
export class LiveWallPaperService {
  constructor(private http: HttpClient) { }

  getListLiveWallPaper(caregoryId?:number) {
    return this.http.get<any>(`${environment.baseUrl}/v1/assets/categories/${caregoryId}/items`);
  }
  getLiveWallPaperByID(id) {
    return this.http.get<result>(`${environment.baseUrl}/v1/assets/categories/${id}`);
  }
  deleteLiveWallPaper(id) {
    return this.http.delete<result>(`${environment.baseUrl}/v1/assets/categories/${id}`);
  }

  saveLiveWallPaper(model) {
    return this.http.post<result>(`${environment.baseUrl}/LiveWallPaper/`, model);
  }
}
