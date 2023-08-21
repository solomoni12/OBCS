import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../model/login/login.module';
import { Observable } from 'rxjs';
import { Register } from '../model/register/register.module';
import { RegisterApplication } from '../model/register-application/register-application.module';
import { getApplicationByApplicationId } from '../model/get-applicatio-by-application-idn/get-applicatio-by-application-idn.module';
import { ChangePassword } from '../model/change-password/change-password.module';
import { ForgotPassword } from '../model/forgot-password/forgot-password.module';
import { ResetPassword } from '../model/reset-password/reset-password.module';

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
 



// UserAPI http://127.0.0.1:8000/api/logged
  signin(user: Login): Observable<any> {
    return this.http.post<any>(`${this.urlapi}/login`, user);
  }
  register(user: Register): Observable<any> {
    return this.http.post(`${this.urlapi}/register`, user);
  }
  loggedUser(): Observable<any> {
    return this.http.get<any>(`${this.urlapi}/logged`);
  }
  UpdateUser(data:any, id: number){
    return this.http.put(`${this.urlapi}/user/${id}`, data, { headers: this.headers });
  }
  logout(): Observable<any>{
    return this.http.post(`${this.urlapi}/logout`,{ headers: this.headers })
  }
  changepassword(changepassword: ChangePassword): Observable<any> {
    return this.http.post<any>(`${this.urlapi}/changepassword`, changepassword, { headers: this.headers });
  }
  forgotPassword(forgotPassword: ForgotPassword): Observable<any> {
    return this.http.post<any>(`${this.urlapi}/password/forgot`, forgotPassword);
  }
  resetPassword(resetPassword: ResetPassword): Observable<any> {
    return this.http.post<any> (`${this.urlapi}/password/reset`, resetPassword);
  }

  // Application API http://127.0.0.1:8000/api/application/
  registerApplication(user: RegisterApplication): Observable<any> {
    return this.http.post(`${this.urlapi}/applications`, user, { headers: this.headers });
  }
  getApplication(): Observable<any>{
    return this.http.get<any>(`${this.urlapi}/applications`, { headers: this.headers });
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


  updatApplication(data:any, id: number){
    return this.http.put(`${this.urlapi}/applications/update-by-applicationId/${id}`, data, { headers: this.headers });
  }
  getOneApplications(applicationId: any): Observable<any>{
    return this.http.get<any>(`${this.urlapi}/applications/by-applicationId/${applicationId}`, { headers: this.headers });
  }

  // registered user Api http://127.0.0.1:8000/api/registered_user  http://127.0.0.1:8000/api/users/5
  getAllRegisteredUser(): Observable<any>{
    return this.http.get<any>(`${this.urlapi}/registered_user`);
  }
  deleteRegisteredUser(id:any){
    return this.http.delete(`${this.urlapi}/users/${id}`);
  }
  // http://127.0.0.1:8000/api/users/3/applications http://127.0.0.1:8000/api/applications/41916884
  getAllRegisteredUserWithApplications(id:any): Observable<any>{
    return this.http.get<any>(`${this.urlapi}/users/${id}/applications`);
  }
  getApplicationByApplicationId(id:any): Observable<any>{
    return this.http.get<any>(`${this.urlapi}/applications/${id}`);
  }
}
