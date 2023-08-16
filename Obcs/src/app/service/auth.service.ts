import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../model/login/login.module';
import { Observable } from 'rxjs';
import { Register } from '../model/register/register.module';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
     const token = sessionStorage.getItem('token');
     console.log(token);
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  urlapi = 'http://127.0.0.1:8000/api';

  IsloggedIn() {
    return sessionStorage.getItem('email') != null;
  }
  GetUserrole(){
    return sessionStorage.getItem('userrole') != null?sessionStorage.getItem('userrole'):'';
  }
  GetUserEmail(){
    return sessionStorage.getItem('email') != null?sessionStorage.getItem('email'):'';
  }
  GetUserFirstName(){
    return sessionStorage.getItem('firstname') != null?sessionStorage.getItem('firstname'):'';
  }
  GetUsrLastName(){
    return sessionStorage.getItem('lastname') != null?sessionStorage.getItem('lastname'):'';
  }
  GetUserSex(){
    return sessionStorage.getItem('sex') != null?sessionStorage.getItem('sex'):'';
  }
  GetUserPhone(){
    return sessionStorage.getItem('phone_number') != null?sessionStorage.getItem('phone_number'):'';
  }
  GetUsrAddress(){
    return sessionStorage.getItem('physical_address') != null?sessionStorage.getItem('physical_address'):'';
  }
 



// UserAPI
  signin(user: Login): Observable<any> {
    return this.http.post<any>(`${this.urlapi}/login`, user);
  }
  register(user: Register): Observable<any> {
    return this.http.post(`${this.urlapi}/register`, user);
  }
  logout(): Observable<any>{
    return this.http.post(`${this.urlapi}/logout`,{ headers: this.headers })
  }
}
