import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  public Base_URL = 'http://localhost:';
  public PORT= 8080;

  public admin = '/admin/';
  public company = '/company/';
  public customer = '/customer/';
  constructor() { }


  public getAdminUrl(): string {
    return this.Base_URL + this.PORT + this.admin;
  }

  public getCompanyUrl(): string {
    return this.Base_URL + this.PORT + this.company;
  }

  public getCustomerUrl(): string {
    return this.Base_URL + this.PORT +this.customer;
  }


  public getURL(type: string): string {
    switch (type) {

      case 'admin':
        return this.getAdminUrl();
      case 'customer':
        return this.getCustomerUrl();
      case 'company':
        return this.getCompanyUrl();

    }

  }
  
}
