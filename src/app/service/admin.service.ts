import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/company';
import { Customer } from '../model/customer';
import { TokenManagerService } from './token-manager.service';

// Ira

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private httpClient:HttpClient,private tokenManagerService: TokenManagerService) { }

  public getCompanies(): Observable<Company[]>{
    return this.httpClient.get<Company[]>('../../assets/json/company.json');
    // const headers = new HttpHeaders({ 'Coupon-System-Header': this.tokenManagerService.getToken() });
    // const options = { headers: headers };
    // return this.httpClient.get<Company[]>('http://localhost:8080/admin/get-all-companies', options);
  }
  public getCompanyById(id: number): Observable<any> {
    return this.httpClient.get<any>('../../assets/json/company.json' + id);
  }

  public deleteCompany(id: number): Observable<any>{
    return this.httpClient.delete<any>('../../assets/json/company.json');
  }

  public addCompany(company: Company): Observable<any>{
    return this.httpClient.post<any>('../../assets/json/company.json', company);
  }

  public updateCompany(company: Company): Observable<any>{
    return this.httpClient.put<any>('../../assets/json/company.json', company);
  }

  public getCustomers(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>('../../assets/json/customer.json');
    // const headers = new HttpHeaders({ 'Coupon-System-Header': this.tokenManagerService.getToken() });
    // const options = { headers: headers };
    // return this.httpClient.get<Customer[]>('http://localhost:8080/admin/get-all-customers', options);
  }

  public deleteCustomer(id: number): Observable<any>{
    return this.httpClient.delete<any>('../../assets/json/customer.json');
  //   const headers = new HttpHeaders(
  //     { 'Coupon-System-Header': this.tokenManagerService.getToken() ,
  //       'Access-Control-Allow-Origin': '*'}
  //     );
  //   //const body = JSON.stringify(customer);
  //   //console.log(body);
  //   const options = { headers };

  //   return this.httpClient.delete<any>('http://localhost:8080/admin/delete-customer/' + id + '/', options);
  // }





  }

  public addCustomer(customer: Customer): Observable<any>{
    return this.httpClient.post<any>('../../assets/json/customer.json', customer);
    // const headers = new HttpHeaders(
    //   { 'Coupon-System-Header': this.tokenManagerService.getToken() ,
    //     'Access-Control-Allow-Origin': '*'}
    //   );

    // const couponsArr = [];
    // if (customer.coupons !== undefined){
    //   customer.coupons.forEach(element => {
    //     couponsArr.push(element);
    //  });
    // }
    // const body = {first_name: customer.first_name, last_name: customer.last_name,
    //   password: customer.password, coupons: couponsArr };
    // console.log(body);
    // const options = { headers, withCredentials: true};
    // return this.httpClient.post<any>('http://localhost:8080/admin/add-customer', customer, options);
  }


 

  public updateCustomer(customer: Customer): Observable<any>{
    return this.httpClient.put<any>('../../assets/json/customer.json', customer);
  }
  public getCustomerById(id: number): Observable<any> {
    return this.httpClient.get<any>('../../assets/json/customer.json' );
  }

  // maybe deleted -check if used 
//   public getOneCustomer(customerID: number): Observable<Customer> {
//     return this.httpClient.get<Customer>('../../../assets/json/get-one-customer.json', { withCredentials: true });

// }
}