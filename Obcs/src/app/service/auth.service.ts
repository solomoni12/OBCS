import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../model/login/login.module';
import { Observable } from 'rxjs';
import { Register } from '../model/register/register.module';
import { RegisterApplication } from '../model/register-application/register-application.module';

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
    return sessionStorage.getItem('mbno') != null?sessionStorage.getItem('mbno'):'';
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

  // Application API http://127.0.0.1:8000/api/application/
  registerApplication(user: RegisterApplication): Observable<any> {
    return this.http.post(`${this.urlapi}/application`, user, { headers: this.headers });
  }
  getApplication(): Observable<any>{
    return this.http.get<any>(`${this.urlapi}/application`, { headers: this.headers });
  }
  getOneApplication(applicationId: any): Observable<any>{
    return this.http.get<any>(`${this.urlapi}/application/${applicationId}`, { headers: this.headers });
  }
  getApplicationVerified(): Observable<any>{
    return this.http.get<any>(`${this.urlapi}/applications/verified`, { headers: this.headers });
  }


  // admin api http://127.0.0.1:8000/api/applications/rejected_application
  getNewApplication(): Observable<any>{
    return this.http.get<any>(`${this.urlapi}/applications/new_application`);
  }
  getAllApplication(): Observable<any>{
    return this.http.get<any>(`${this.urlapi}/applications/all_application`);
  }
  getRejectedApplication(): Observable<any>{
    return this.http.get<any>(`${this.urlapi}/applications/rejected_application`);
  }
  getVerifiedApplication(): Observable<any>{
    return this.http.get<any>(`${this.urlapi}/applications/verified_application`);
  }

  // update http://127.0.0.1:8000/api/application/4  http://127.0.0.1:8000/api/applications/update-by-applicationId/79276736
  // getOneApplication(applicationId: any): Observable<any>{
  //   return this.http.get<any>(`${this.urlapi}/application/${applicationId}`, { headers: this.headers });
  // }
  updatApplication(data:any, id: number){
    return this.http.put(`${this.urlapi}/applications/update-by-applicationId/${id}`, data, { headers: this.headers });
  }
}
