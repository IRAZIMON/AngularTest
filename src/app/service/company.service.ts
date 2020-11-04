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

  public addCoupon(coupon: Coupon): Observable<any>{
    const headers = new HttpHeaders(
      { 'Authorization': sessionStorage.getItem('Authorization') ,
        'Access-Control-Allow-Origin': '*'}
      );
    const options = { headers, withCredentials: true};
    return this.httpClient.post<any>('http://localhost:8080/company/add-coupon/' ,coupon ,options);
  }

  public updateCoupon(coupon: Coupon): Observable<any>{
    const headers = new HttpHeaders(
      { 'Authorization': sessionStorage.getItem('Authorization') ,
         'Access-Control-Allow-Origin': '*'}
      );
     const options = { headers, withCredentials: true};
    return this.httpClient.put<any>('http://localhost:8080/company/update-coupon/' , coupon , options);
  } 


   public getCoupons(): Observable<Coupon[]>{
     const headers = new HttpHeaders(
      { 'Authorization': sessionStorage.getItem('Authorization') ,
         'Access-Control-Allow-Origin': '*'}
      );
     const options = { headers, withCredentials: true};
     return this.httpClient.get<Coupon[]>('http://localhost:8080/company/get-all-coupons/' ,options);

 
     }
  public deleteCoupon(id: number): Observable<any>{
    const headers = new HttpHeaders(
      { 'Authorization': sessionStorage.getItem('Authorization') ,
         'Access-Control-Allow-Origin': '*'}
      );
     const options = { headers, withCredentials: true};
     return this.httpClient.delete<any>('http://localhost:8080/company/delete-coupon/'+ id + '/', options );

  }

  
 public getCompanyDetails (){
   const headers = new HttpHeaders(
     { 'Authorization': sessionStorage.getItem('Authorization') ,
       'Access-Control-Allow-Origin': '*'}
     );

    // console.log(sessionStorage.getItem('Authorization'));
   const options = { headers, withCredentials: true};
   return this.httpClient.get<any>('http://localhost:8080/company/get-company-details/' ,options);
 }

}
