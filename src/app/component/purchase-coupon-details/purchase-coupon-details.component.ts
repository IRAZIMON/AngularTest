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
  public coupons: Coupon[];
  coupon: Coupon = new Coupon();
  id: number;
  location: any;


  constructor(
    private title: Title,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private couponService: CouponService,   

  ) { this.id = Number(activatedRoute.snapshot.params.id); }

  ngOnInit(): void {
    this.title.setTitle('purchase-coupons-details')
   this.getAllCoupons();
  }
  addPurchaseCoupon(coupon: Coupon) {
    this.customerService.addPurchaseCoupon(coupon).subscribe(
      (res) => {
        alert("Your porches succeeded");
      },
      (err) => {
   alert("Your porches failed");
       
      }

    );

  }

  public getAllCoupons() {
    this.couponService.getAllCoupons().subscribe(
      (res) => { this.coupons = res },
      (err) => { console.log('err') }
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
      this.router.navigate(['purchase-coupons']);
  }
  }



