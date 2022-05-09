import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChargingService {

  constructor(private http: HttpClient) { }

  getListCharging(){
    return this.http.get<any>("http://localhost:3000/list-item")
  }

  getListLiveWallpaper(){
    return this.http.get<any>("http://localhost:3000/live-wallpaper")
  }
  getListchargingCategory(){
    return this.http.get<any>("http://localhost:3000/list-category")
  }
}
