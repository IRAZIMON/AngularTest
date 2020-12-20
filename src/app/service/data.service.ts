import { Coupon } from './../model/coupon';
import { Customer } from './../model/customer';
import { Company } from './../model/company';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public companies: Company[];
  public coupons: Coupon[];
  public customers: Customer[];
  private isLoggedIn: boolean = false;
  constructor() { }


  public setCompanies(companies: Company[]): void {
    this.companies = companies;
  }

  public getCompanies(): Company[] {
    return this.companies;
  }


  public setCustomers(customers: Customer[]): void {
    this.customers = customers;
  }

  public getCustomers(): Customer[] {
    return this.customers;
  }
  public setCoupons(coupons: Coupon[]): void {
    this.coupons = coupons;
  }

  public getCoupons(): Coupon[] {
    return this.coupons;
  }
  public getLoggedIn(): boolean{
    return this.isLoggedIn;
}

public setLoggedIn(flag: boolean){
  this.isLoggedIn = flag;
}
}