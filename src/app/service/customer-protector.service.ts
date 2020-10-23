import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerProtectorService implements CanActivate{

 public constructor(private loginService: LoginService, private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
   if(this.loginService.type==="customer"){
     return true;
   }
  //  this.router.navigateByUrl('login');
   return false;
  }

 
}
