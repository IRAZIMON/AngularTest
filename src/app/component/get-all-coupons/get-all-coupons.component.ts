import { Router } from '@angular/router';

import { CouponService } from './../../service/coupon.service';
import { Coupon } from './../../model/coupon';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Title } from '@angular/platform-browser';
import { CompanyService } from 'src/app/service/company.service';


@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {
  public coupons: Coupon[];
  location: any;
  constructor(private title: Title,
    private dataService: DataService,
    private companyService: CompanyService,
    private router: Router
   
    ) { }

  ngOnInit(): void {

    this.title.setTitle('get-All-Coupons');

     this.companyService.getCoupons().subscribe(
       (coupons) => {
         this.coupons = coupons;
       this.dataService.setCoupons(this.coupons);

       },
       (err) => { alert(err.message); }
     );
  }

  deleteCoupon(id: number): void {
    const action = confirm('Are you sure you want to delete this coupon' + id + '?');
   if (action) {
      this.companyService.deleteCoupon(id).subscribe(
        (res) => { this.coupons = this.coupons.filter(coupon => coupon.id !== id); },
        (err) => {
          alert(err.message);
          this.coupons = this.coupons.filter(coupon => coupon.id !== id);
        });
     }
  }


  filterCoupon(category: string): void {
    this.companyService.getCoupons().subscribe(
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
      this.companyService.getCoupons().subscribe(
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

    // let's call our modal window
   
    public goBack():void{
      this.router.navigate(['home']);
      }


}
