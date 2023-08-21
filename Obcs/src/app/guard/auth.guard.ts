import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
// import * as alertifyjs from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.service.IsloggedIn()) {
      const token = localStorage.getItem('token');
      if (token) {
        if (route.url.length > 0) {
          const menu = route.url[0].path;

          if (menu === 'user') {
            if (this.service.GetUserrole() === '1') {
              return true;
            } else {
              this.router.navigate(['/logout']);
            //   alertifyjs.error('You do not have access to this page.');
              return false;
            }
          } else {
            return true;
          }
        } else {
          return true;
        }
      } else {
        this.router.navigate(['login']);
        return false;
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
