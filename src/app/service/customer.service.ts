import { Customer } from './../model/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Coupon } from '../model/coupon';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient: HttpClient) { }

  public addPurchaseCoupon(coupon: Coupon): Observable<any>{
    const headers = new HttpHeaders(
      { 'Authorization': sessionStorage.getItem('Authorization') ,
        'Access-Control-Allow-Origin': '*'}
      );
    const options = { headers, withCredentials: true};
    return this.httpClient.post<any>('http://localhost:8080/customer/add-purchaseCoupon/' ,coupon ,options);
  }

  public getPurchaseCoupons(): Observable<Coupon[]>{
    const headers = new HttpHeaders(
     { 'Authorization': sessionStorage.getItem('Authorization') ,
        'Access-Control-Allow-Origin': '*'}
     );
    const options = { headers, withCredentials: true};
    return this.httpClient.get<Coupon[]>('http://localhost:8080/customer/get-all-purchase-coupon/' ,options);


    }

    public getCustomerDetails (){
      const headers = new HttpHeaders(
        { 'Authorization': sessionStorage.getItem('Authorization') ,
          'Access-Control-Allow-Origin': '*'}
        );
      const options = { headers, withCredentials: true};
      return this.httpClient.get<any>('http://localhost:8080/customer/get-customer-details/'  ,options);
    }

}
