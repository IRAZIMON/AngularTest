import {  getLoginClass } from './../model/getLoginModel';
import { Observable } from 'rxjs';
import { userInformation } from './../model/user-information';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  public isLoggedIn = false;
  public token: string;
  public type: string;
  constructor(private httpClient:HttpClient) { }


  public getLogin(userInformation: userInformation):Observable<getLoginClass>{
   return this.httpClient.get('../../assets/json/login.json');

  //  'http://localhost:8080/admin/'
  }
}
