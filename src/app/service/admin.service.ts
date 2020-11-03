
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../model/company';
import { Customer } from '../model/customer';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  constructor( private httpClient:HttpClient) { }

 
  public addCompany(company: Company): Observable<any>{
    const headers = new HttpHeaders(
      { 'Authorization': sessionStorage.getItem('Authorization') ,
        'Access-Control-Allow-Origin': '*'}
      );

      console.log(sessionStorage.getItem('Authorization'));
    const options = { headers, withCredentials: true};
    return this.httpClient.post<any>('http://localhost:8080/admin/add-company/',company ,options);
    
  }

  public updateCompany(company: Company): Observable<any>{
   
    const headers = new HttpHeaders(
      { 'Authorization': sessionStorage.getItem('Authorization') ,
         'Access-Control-Allow-Origin': '*'}
      );
     const options = { headers, withCredentials: true};
    return this.httpClient.put<any>('http://localhost:8080/admin/update-company/' ,company , options);
}
public deleteCompany(id: number): Observable<any>{
     const headers = new HttpHeaders(
    { 'Authorization': sessionStorage.getItem('Authorization') ,
       'Access-Control-Allow-Origin': '*'}
    );
   const options = { headers, withCredentials: true};
   return this.httpClient.delete<any>('http://localhost:8080/admin/delete-company/' + id + '/', options);
}


public getCompanies(): Observable<Company[]>{
  const headers = new HttpHeaders(
    { 'Authorization': sessionStorage.getItem('Authorization') ,
       'Access-Control-Allow-Origin': '*'}
    );
   const options = { headers, withCredentials: true};
   return this.httpClient.get<Company[]>('http://localhost:8080/admin/get-all-companies', options);
}

  public getCompanyById(id: number): Observable<any> {
    const headers = new HttpHeaders(
      { 'Authorization': sessionStorage.getItem('Authorization') ,
         'Access-Control-Allow-Origin': '*'}
      );
     const options = { headers, withCredentials: true};
     return this.httpClient.get<Company>('http://localhost:8080/admin/getOneCompany/' + id + '/', options);
  }
  
  public addCustomer(customer: Customer): Observable<any>{
    const headers = new HttpHeaders(
      { 'Authorization': sessionStorage.getItem('Authorization') ,
         'Access-Control-Allow-Origin': '*'}
      );
     const options = { headers, withCredentials: true};;
    return this.httpClient.post<any>('http://localhost:8080/admin/add-customer', customer, options);
  }
  public updateCustomer(customer: Customer): Observable<any>{
    const headers = new HttpHeaders(
      { 'Authorization': sessionStorage.getItem('Authorization') ,
         'Access-Control-Allow-Origin': '*'}
      );
  
     const options = { headers, withCredentials: true};
    return this.httpClient.put<any>('http://localhost:8080/admin/update-customer', customer,options);
    
 
  }
  public deleteCustomer(id: number): Observable<any>{
    const headers = new HttpHeaders(
      { 'Authorization': sessionStorage.getItem('Authorization') ,
         'Access-Control-Allow-Origin': '*'}
      );
     const options = { headers, withCredentials: true};
      return this.httpClient.delete<any>('http://localhost:8080/admin/delete-customer/' + id + '/', options);
     }

  public getCustomers(): Observable<Customer[]>{
    const headers = new HttpHeaders(
      { 'Authorization': sessionStorage.getItem('Authorization') ,
         'Access-Control-Allow-Origin': '*'}
      );
     const options = { headers, withCredentials: true};
     return this.httpClient.get<Customer[]>('http://localhost:8080/admin/get-all-customers', options);
  }


  public getCustomerById(id: number): Observable<any> {
    const headers = new HttpHeaders(
      { 'Authorization': sessionStorage.getItem('Authorization') ,
         'Access-Control-Allow-Origin': '*'}
      );
  
     const options = { headers, withCredentials: true};
    return this.httpClient.get<Customer>('http://localhost:8080/admin/getOneCustomer/' + id + '/', options);
    
    
    
  }

  // maybe deleted -check if used 
//   public getOneCustomer(customerID: number): Observable<Customer> {
//     return this.httpClient.get<Customer>('../../../assets/json/get-one-customer.json', { withCredentials: true });

// }


}









