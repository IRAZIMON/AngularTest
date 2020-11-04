import { Coupon } from './../model/coupon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private httpClient: HttpClient) { }


 public getAllCoupons(){
  return this.httpClient.get<any>('http://localhost:8080/coupons/get-all/' );

 }



}
