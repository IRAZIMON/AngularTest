import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompanyProtectorService implements CanActivate {

  public constructor(private loginService: LoginService, private router: Router) { }
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.type === "company") {
      return true;

    }
    // this.router.navigateByUrl('login')
    return false;
  }
}
