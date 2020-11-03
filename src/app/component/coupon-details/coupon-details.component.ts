import { Company } from './../../model/company';
import { CompanyService } from 'src/app/service/company.service';
import { CouponService } from './../../service/coupon.service';
import { Coupon } from 'src/app/model/coupon';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common'
@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.component.html',
  styleUrls: ['./coupon-details.component.css']
})
export class CouponDetailsComponent implements OnInit {
  public id: number;
  public type: string = 'Add';
  public coupon = new Coupon();
  public getAllcoup: boolean;
  private companyID: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router,
    private dataService: DataService,
    private location: Location
    ) {


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

    this.companyService.getCompanyDetails().subscribe(
      (company: Company) => { this.companyID = company.id; this.coupon.companyId=this.companyID}, (err) => { console.log('err') })
      console.log(this.companyID)
  }

public goBack():void{
this.location.back();
}



  public addOrUpdateCoupon(): void {

    alert(this.coupon.companyId + ' ' + this.coupon.category + ' ' + this.coupon.title + ' ' + this.coupon.startDate + ' ' + this.coupon.description + ' ' + this.coupon.endDate + ' ' + this.coupon.image + ' ' + this.coupon.price + ' ' + this.coupon.amount);
    alert(JSON.stringify(this.coupon));
    if (this.id === 0) {
      this.companyService.addCoupon(this.coupon).subscribe(

        (res) => { alert('Coupon Added'); },
        (err) => { alert(err); });
    } else {
      this.companyService.updateCoupon(this.coupon).subscribe(
        (res) => { alert('Coupon Updated'); },
        (err) => { alert(err.message); });
    }


  }
  navigate(): void {
    this.router.navigateByUrl('/get-all-coupons');
  }



  public isNegative(any: any): boolean {
    return (Number(any) < 0);
  }




}
