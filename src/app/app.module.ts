import { DataService } from './service/data.service';
import { CouponService } from './service/coupon.service';
import { CustomerService } from './service/customer.service';
import { AdminComponent } from './component/admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './component/company-details/company-details.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { GetAllCompaniesComponent } from './component/get-all-companies/get-all-companies.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GetAllCustomersComponent } from './component/get-all-customers/get-all-customers.component';
import { CustomersDetailsComponent } from './component/customers-details/customers-details.component';
import { CouponComponent } from './component/coupon/coupon.component';
import { GetAllCouponsComponent } from './component/get-all-coupons/get-all-coupons.component';
import { CouponDetailsComponent } from './component/coupon-details/coupon-details.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CompanyService } from './service/company.service';
import { CustomerComponent } from './component/customer/customer.component';
import { CompanyComponent } from './component/company/company.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { MainComponent } from './component/main/main.component';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    NavbarComponent,
     LoginComponent,
    LogoutComponent,
     GetAllCompaniesComponent,
    GetAllCustomersComponent,
    CustomersDetailsComponent,
    AdminComponent,
    CouponComponent,
    GetAllCouponsComponent,
    CouponDetailsComponent,
    CustomerComponent,
    CompanyComponent,
    FooterComponent,
    AboutComponent,
    MainComponent,
    ConfirmDialogComponent,
   

  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
