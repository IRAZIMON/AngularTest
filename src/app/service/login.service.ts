
import { Credentials } from './../model/Credentials';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResult } from '../model/loginResult';
import { UrlService } from './url.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedInEmail: string;
  public isLoggedIn = false;
  public token: string;
  public type: string;

  constructor(private httpClient:HttpClient ,  private urlService:UrlService) { }


  ;
     public loginRequest(credentials: Credentials):Observable<LoginResult>{
      const ourUrl= this.urlService.getURL(credentials.type.toLowerCase()) + '/login'
     

      return this.httpClient.post(ourUrl,credentials);


  }

}
