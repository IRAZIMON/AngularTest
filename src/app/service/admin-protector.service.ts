import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminProtectorService implements CanActivate
{

  public constructor(private loginService:LoginService,private router:Router) { }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
   if(this.loginService.type==="admin"){
     return true;
   }
  //  this.router.navigateByUrl('login');
   return false;
  }

  
}
