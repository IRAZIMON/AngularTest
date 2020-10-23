import { CouponService } from './../../service/coupon.service';
import { Coupon } from 'src/app/model/coupon';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.css']
})
export class CouponDetailsComponent implements OnInit {
  public id: number;
  public type: string = 'Add';
  public coupon = new Coupon();
  public getAllcoup:boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private couponService: CouponService,
    private router: Router,
    private dataService: DataService) {


    this.id = Number(activatedRoute.snapshot.params.id);
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      this.type = 'Update';
      this.coupon.id = this.id;

      this.coupon = this.dataService.getCoupons().filter(c => c.id === this.coupon.id)[0];
    } else {
      this.type = 'Add';
    }

  }


  public addOrUpdateCoupon(): void {

    alert(this.coupon.company_id + ' ' + this.coupon.category_id + ' ' + this.coupon.title + ' ' + this.coupon.start_date + ' ' + this.coupon.description + ' ' + this.coupon.end_date + ' ' + this.coupon.image + ' ' + this.coupon.price + ' ' + this.coupon.amount);
    alert(JSON.stringify(this.coupon));
    if (this.id === 0) {
      this.couponService.addCoupon(this.coupon).subscribe(

        (res) => { alert('Coupon Added'); },
        (err) => { alert(err.message); });
    } else {
      this.couponService.updateCoupon(this.coupon).subscribe(
        (res) => { alert('Coupon Updated'); },
        (err) => { alert(err.message); });
    }


  }
  navigate():void{
    this.router.navigateByUrl('/get-all-coupons');
  }
    

 
  public isNegative(any: any): boolean {
    return (Number(any) < 0);
  }

 

 
}
