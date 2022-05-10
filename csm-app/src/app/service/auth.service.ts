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
    return this.http.post<boolean>("http://localhost:3000/signupUser", param)
  }
  /**
   * đăng ký
   * @param param 
   * @returns 
   */
  signup(param:any){
    return this.http.post<boolean>("http://localhost:3000/signupUser", param)
  }
}
