import { CouponService } from './../../service/coupon.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Coupon } from 'src/app/model/coupon';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-purchase-coupon-details',
  templateUrl: './purchase-coupon-details.component.html',
  styleUrls: ['./purchase-coupon-details.component.css']
})
export class PurchaseCouponDetailsComponent implements OnInit {
  private customer: Customer;
  // private coupon = new Coupon();
  public coupons: Coupon[];
  coupon: Coupon = new Coupon();
  logger: any;
  id: number;
  location: any;

  constructor(
    private title: Title,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private couponService: CouponService


  ) { this.id = Number(activatedRoute.snapshot.params.id); }

  ngOnInit(): void {
   this.getAllCoupons();
  }
  addPurchaseCoupon(coupon: Coupon) {
    this.customerService.addPurchaseCoupon(coupon).subscribe(
      (res) => {
        alert("Your porches succeeded");

        this.logger.info("coupon: '" + coupon.getTitle + "' purchased by customer: '" + this.customer.getName + "'");
      },
      (err) => {
   alert("Your porches failed");
        this.logger.error("customer: '" + this.customer.getName + "' failed to purchase coupon: '" + coupon.getTitle + "'")
      }

    );

  }



  public getAllCoupons() {
    this.couponService.getAllCoupons().subscribe(
      (res) => { this.coupons = res },

      (err) => { console.log('err') }
    )
  }

  public goBack(): void {
    this.location.back();
  }


}
