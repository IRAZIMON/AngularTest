import { Company } from './../model/company';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    const headers = new HttpHeaders(
      { 'Authorization': sessionStorage.getItem('Authorization') ,
        'Access-Control-Allow-Origin': '*'}
      );

      console.log(sessionStorage.getItem('Authorization'));
    const options = { headers, withCredentials: true};
    return this.httpClient.post<any>('http://localhost:8080/company/add-coupon/' ,coupon ,options);
    // ('../../assets/json/company.json', company);
  }




 

  public updateCoupon(coupon: Coupon): Observable<any>{
    return this.httpClient.put<any>('../../assets/json/coupon.json', coupon);
  }
  public getCouponById(id: number): Observable<any> {
    return this.httpClient.get<any>('../../assets/json/coupon.json' );
  }
  
public getCompanyDetails (){
  const headers = new HttpHeaders(
    { 'Authorization': sessionStorage.getItem('Authorization') ,
      'Access-Control-Allow-Origin': '*'}
    );

    console.log(sessionStorage.getItem('Authorization'));
  const options = { headers, withCredentials: true};
  return this.httpClient.get<any>('http://localhost:8080/company/get-company-details/'  ,options);
}

}
