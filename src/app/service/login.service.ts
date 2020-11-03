
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
  // public Base_Url =  'http://localhost:8080/';
  constructor(private httpClient:HttpClient ,  private urlService:UrlService) { }


  // public getLogin(userInformation: userInformation):Observable <HttpResponse<any>|HttpErrorResponse>{

    //  const ourUrl= this.Base_Url + userInformation.type.toLowerCase() + '/login?email='+ userInformation.email + '&password=' +userInformation.password;
    // return this.httpClient.post<HttpResponse<any>|HttpErrorResponse>(ourUrl,{observe: 'response}'});
    // return this.httpClient.get('../../assets/json/login.json');
     public loginRequest(credentials: Credentials):Observable<LoginResult>{
      const ourUrl= this.urlService.getURL(credentials.type.toLowerCase()) + '/login'
     

      return this.httpClient.post(ourUrl,credentials);


  }
// public logOut():void{
//   this.token=null;
//   this.loggedInEmail=null;
//   localStorage.removeItem('userInformation')
//   localStorage.removeItem('token')
//   }

//   public saveToken(token :string):void{
//     this.token=token;
//     localStorage.setItem('token' ,token)
   

//   }
//   public addUserInformation(userInformation :userInformation):void{
    
//     localStorage.setItem('userInformation' ,JSON.stringify(userInformation));
   

//   }
//   public getUserFromLocalCache(userInformation :userInformation):void{
    
//     return  JSON.parse(localStorage.getItem('userInformation'));
   

//   }
//   public loadToken():void{
//   this.token=localStorage.getItem('token');
   

//   }
//   public getToken():string{
//     return this.token;

    
  
//   }
}
