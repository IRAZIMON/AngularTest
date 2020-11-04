import { HomeComponent } from './component/home/home.component';
import { PurchaseCouponDetailsComponent } from './component/purchase-coupon-details/purchase-coupon-details.component';
import { PurchaseCouponsComponent } from './component/purchase-coupons/purchase-coupons.component';

import { ViewComponent } from './component/view/view.component';
import { AboutComponent } from './component/about/about.component';
import { CustomerComponent } from './component/customer/customer.component';
import { CompanyComponent } from './component/company/company.component';
import { GetAllCouponsComponent } from './component/get-all-coupons/get-all-coupons.component';
import { CouponDetailsComponent } from './component/coupon-details/coupon-details.component';
import { CustomersDetailsComponent } from './component/customers-details/customers-details.component';
import { GetAllCustomersComponent } from './component/get-all-customers/get-all-customers.component';
import { GetAllCompaniesComponent } from './component/get-all-companies/get-all-companies.component';
import { CustomerProtectorService } from './service/customer-protector.service';
import { AdminProtectorService } from './service/admin-protector.service';
import { CompanyProtectorService } from './service/company-protector.service';
import { LogoutComponent } from './component/logout/logout.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AdminComponent } from './component/admin/admin.component';
import { CompanyDetailsComponent } from './component/company-details/company-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [


  // { path: '**', component: NavbarComponent, pathMatch: 'full' },

  { path: 'admin', component: AdminComponent, canActivate: [AdminProtectorService] },
  { path: 'company', component: CompanyComponent, canActivate: [CompanyProtectorService] },
  { path: 'customer', component: CustomerComponent, canActivate: [CustomerProtectorService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'get-All-Companies', component: GetAllCompaniesComponent },
  { path: 'get-All-Customers', component: GetAllCustomersComponent },
  { path: 'get-All-Coupons', component: GetAllCouponsComponent },
  { path: 'company-details/:id', component: CompanyDetailsComponent },
  { path: 'customer-details/:id', component: CustomersDetailsComponent },
  { path: 'coupon-details/:id', component: CouponDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'purchase-coupons', component: PurchaseCouponsComponent },
  { path: 'purchase-details-coupons', component: PurchaseCouponDetailsComponent },
  { path: '', component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
