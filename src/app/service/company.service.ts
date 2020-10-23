import { Company } from './../model/company';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../model/coupon';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  public getCoupons(): Observable<Coupon[]>{
    return this.httpClient.get<Coupon[]>('../../assets/json/coupon.json');
  }

  public deleteCoupon(id: number): Observable<any>{
    return this.httpClient.delete<any>('../../assets/json/coupon.json');
  }

  public addCoupon(coupon: Coupon): Observable<any>{
    return this.httpClient.post<any>('../../assets/json/coupon.json', coupon);
  }

  public updateCoupon(coupon: Coupon): Observable<any>{
    return this.httpClient.put<any>('../../assets/json/coupon.json', coupon);
  }
  public getCouponById(id: number): Observable<any> {
    return this.httpClient.get<any>('../../assets/json/coupon.json' );
  }
  


}
