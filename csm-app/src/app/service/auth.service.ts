import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
/**
 * đăng nhập
 * @param param 
 * @returns 
 */
  login(param: any) {
    return this.http.post<any>("http://45.77.245.159:3000/v1/auth/login", param)
  }
  /**
   * đăng ký
   * @param param 
   * @returns 
   */
  signup(param:any){
    return this.http.post<any>("http://45.77.245.159:3000/v1/auth/register", param)
  }
}
