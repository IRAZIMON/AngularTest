
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
  constructor(private title: Title,
    private dataService: DataService,
    private companyService: CompanyService,
   
    ) { }

  ngOnInit(): void {

    this.title.setTitle('Get-All-Coupons');

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

        // (res) => { this.products = this.products.filter(product => product.id !== id); },
        // (err) => { alert(err.message); });

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
        this.coupons = this.coupons.filter(coupon => coupon.category_id === category.toLowerCase());
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



    // let's call our modal window
   



}
