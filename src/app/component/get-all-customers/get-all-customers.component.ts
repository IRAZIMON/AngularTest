


import { Component, OnInit, ViewChild } from '@angular/core';

import { DataService } from 'src/app/service/data.service';
import { Title } from '@angular/platform-browser';
import { Customer } from 'src/app/model/customer';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent {
updateRow: number;
  public customers:Customer[];


  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor(
    private title: Title,
    private dataService: DataService,
    private adminService: AdminService,
    public dialog: MatDialog,
    private router: Router,
  ) { 

}
  ngOnInit(): void {
    this.title.setTitle('Get-All-Customers');

    this.adminService.getCustomers().subscribe(
       (customers)  => { this.customers = customers;
                         this.dataService.setCustomers(this.customers);

         },
         (err) => { alert(err.message); }
       );
     }
    
  
   
     //public update(Customer(): void {
       //   alert('Update Customer');
       // }
     
      public deleteCustomer(id: number): void {
        const action = confirm('Are you sure you want to delete  this customer' + id + '?');
         if (action) {
           this.adminService.deleteCustomer(id).subscribe(
            (res) => { this.customers= this.customers.filter(customer => customer.id !== id); },
             (err) => {
               alert(err.message);
               this.customers = this.customers.filter(customer => customer.id !== id);
            });
         }
        } 

        getNavigation(link, id){
          if(id === ''){
              this.router.navigate([link]);
          } else {
              this.router.navigate([link + '/' + id]);
          }

     }
        
    }     


 

