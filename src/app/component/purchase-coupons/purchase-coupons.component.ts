import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomerService } from 'src/app/service/customer.service';
import { DataService } from 'src/app/service/data.service';
import { Coupon } from 'src/app/model/coupon';

@Component({
  selector: 'app-purchase-coupons',
  templateUrl: './purchase-coupons.component.html',
  styleUrls: ['./purchase-coupons.component.css']
})
export class PurchaseCouponsComponent implements OnInit {
  public coupons: Coupon[];
  location: any;
  constructor(private title: Title,
    private dataService: DataService,
    private customerService: CustomerService,
    private router: Router
   
    ) { }

  ngOnInit(): void {

    this.title.setTitle('get-All-purchaseCoupons');

     this.customerService.getPurchaseCoupons().subscribe(
       (coupons) => {
         this.coupons = coupons;
      this.dataService.setCoupons(this.coupons);

       },
       (err) => { alert(err.message); }
     );
  }

  filterCoupon(category: string): void {
    this.customerService.getPurchaseCoupons().subscribe(
      (coupons) => {
       
        this.coupons = coupons;
        if(!(category === "all")){
        this.coupons = this.coupons.filter(coupon => coupon.category.toLowerCase() === category.toLowerCase());
        }
        this.dataService.setCoupons(this.coupons);

      },
      (err) => { alert(err.message); }
    );
  }
    filterCouponMaxPrice(maxPrice: number ): void {
      this.customerService.getPurchaseCoupons().subscribe(
        (coupons) => {
         
          this.coupons = coupons;
          if(maxPrice ){
          this.coupons = this.coupons.filter(coupon => maxPrice>coupon.price);
          }
           this.dataService.setCoupons(this.coupons);
  
        },
        (err) => { alert(err.message); }
      );
  }

  getNavigation(link, id){
    if(id === ''){
        this.router.navigate([link]);
    } else {
        this.router.navigate([link + '/' + id]);
    }
}
public goBack():void{
  this.location.back();
  }



}
