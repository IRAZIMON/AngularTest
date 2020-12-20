import { CustomerService } from './../../service/customer.service';
import { Title } from '@angular/platform-browser';
import { CustomersDetailsComponent } from './../customers-details/customers-details.component';
import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/model/coupon';
import { Customer } from 'src/app/model/customer';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-coupons',
  templateUrl: './purchase-coupons.component.html',
  styleUrls: ['./purchase-coupons.component.css']
})
export class PurchaseCouponsComponent implements OnInit {
  private customer: Customer;
  public coupons: Coupon[];
  coupon: Coupon = new Coupon();
  logger: any;
  location: any;


  constructor(
    private title: Title,
    private customerService: CustomerService,
    private dataService: DataService,
    private router: Router,

  ) { }

  ngOnInit(): void {

    this.title.setTitle('purchased coupon')
    this.customerService.getPurchaseCoupons().subscribe(
      (coupons) => {
        this.coupons = coupons;
        this.dataService.setCoupons(this.coupons);
      },
      (err) => {
        console.log('you have a problem to get all coupons ...')
      }
    )
  }



  filterCoupon(category: string): void {
    this.customerService.getPurchaseCoupons().subscribe(
      (coupons) => {

        this.coupons = coupons;
        if (!(category === "all")) {
          this.coupons = this.coupons.filter(coupon => coupon.category.toLowerCase() === category.toLowerCase());
        }
        this.dataService.setCoupons(this.coupons);

      },
      (err) => { alert(err.message); }
    );
  }
  filterCouponMaxPrice(maxPrice: number): void {
    this.customerService.getPurchaseCoupons().subscribe(
      (coupons) => {

        this.coupons = coupons;
        if (maxPrice) {
          this.coupons = this.coupons.filter(coupon => maxPrice > coupon.price);
        }
        this.dataService.setCoupons(this.coupons);

      },
      (err) => { alert(err.message); }
    );
  }
  public goBack(): void {
    this.router.navigate(['home']);
  }



}
