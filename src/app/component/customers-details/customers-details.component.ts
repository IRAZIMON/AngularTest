import { AdminService } from './../../service/admin.service';
import { CustomerService } from './../../service/customer.service';
import { Customer } from './../../model/customer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css']
})
export class CustomersDetailsComponent implements OnInit {
 
  public customer = new Customer();
  public type: string = 'Add';
  public id: number;
  location: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService,
    private router: Router,
    private dataService: DataService,
    private title:Title) {
    this.id = Number(activatedRoute.snapshot.params.id);
  }
  ngOnInit() {

    this.title.setTitle('customer-details')
    if (this.id !== 0) {
      this.type = 'Update';
      this.customer.id = this.id;

      this.customer = this.dataService.getCustomers().filter(c => c.id === this.customer.id)[0];
    } else {
      this.type = 'Add';
    }

  }


  public addOrUpdateCustomer(): void {
    alert(this.customer.firstName + ' ' + this.customer.lastName+ ' ' + this.customer.email + ' ' + this.customer.password);
    alert(JSON.stringify(this.customer));
    if (this.id === 0) {
      this.adminService.addCustomer(this.customer).subscribe(
      
        (res) => { alert('Customer Added'); },
        (err) => { alert(err.message); });
    } else {
      this.adminService.updateCustomer(this.customer).subscribe(
        (res) => { alert('Customer Updated'); },
        (err) => { alert(err.message); });
    }
    

  }


//  public goBack():void{
//  this.router.navigate('/get-All-Customers');
//    }
 }

