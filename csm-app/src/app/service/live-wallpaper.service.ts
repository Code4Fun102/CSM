import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChargingModel } from '../share/model/charging';
import { result } from '../share/model/result';

@Injectable({
  providedIn: 'root',
})
export class LiveWallPaperService {
  constructor(private http: HttpClient) {}

  getListLiveWallPaper() {
    return this.http.get<any>('http://localhost:3000/LiveWallPaper');
  }
  getLiveWallPaperByID(id) {
    return this.http.get<result>(
      `http://localhost:3000/LiveWallPaper/${id}`
    );
  }
  deleteLiveWallPaper(id) {
    return this.http.delete<result>(`http://localhost:3000/LiveWallPaper/${id}`);
  }

  saveLiveWallPaper(model){
    return this.http.post<result>(`http://localhost:3000/LiveWallPaper/`, model);
  }
}
