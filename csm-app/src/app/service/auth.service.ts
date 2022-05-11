import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { result } from '../share/model/result';

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
    return this.http.post<result>("http://localhost:3000/v1/auth/login", param)
  }
  /**
   * đăng ký
   * @param param 
   * @returns 
   */
  signup(param:any){
    return this.http.post<result>("http://localhost:3000/v1/auth/register", param)
  }
}
