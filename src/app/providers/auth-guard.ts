import { userInfo } from './user-info';
  import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private cookie:CookieService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //if((this.cookie.get('UserName').length)>0){
     // console.log('inside authguard true');
     // this.router.navigate(['/home/devicesetup/']);
      return this.cookie.get('UserName').length>0;
    //}else{
    //  console.log('inside authguard false');
     // this.router.navigate(['']);
     // return false;
   // }
      
  }
  
}
