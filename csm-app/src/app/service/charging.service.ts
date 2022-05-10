import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChargingModel } from '../share/model/charging';

@Injectable({
  providedIn: 'root'
})
export class ChargingService {

  constructor(private http: HttpClient) { }

  getListCharging(){
    return this.http.get<any>("http://localhost:3000/charging-item")
  }
  getChargingByID(id){
    return this.http.get<ChargingModel>(`http://localhost:3000/list-item/${id}`);
  }
  deleteCharging(id){
    return this.http.delete<any>(`http://localhost:3000/charging-item/${id}`);
  }

  getListLiveWallpaper(){
    return this.http.get<any>("http://localhost:3000/live-item")
  }
  getListchargingCategory(){
    return this.http.get<any>("http://localhost:3000/charging-category")
  }
  getListliveCategory(){
    return this.http.get<any>("http://localhost:3000/live-category")
  }
}
