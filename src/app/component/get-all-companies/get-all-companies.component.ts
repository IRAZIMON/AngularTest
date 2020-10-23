import { AdminService } from './../../service/admin.service';
import { Router } from '@angular/router';
import { Company } from './../../model/company';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { CompanyService } from 'src/app/service/company.service';
import { Title } from '@angular/platform-browser';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit{
  public companies: Company[];
  dataSource: MatTableDataSource<Company[]>;

  constructor(private title: Title,
    private dataService: DataService,
    private adminService: AdminService,
    private router : Router) { }

  ngOnInit(): void {
    this.title.setTitle('Get-All-Companies');

    this.adminService.getCompanies().subscribe(
         (companies) => { this.companies = companies;
                         this.dataService.setCompanies(companies);
         },
         (err) => { alert(err.message); }
       );
     }
    
  
   
     //public updateCompany(): void {
       //   alert('Update Company');
       // }
     
       public deleteCompany(id: number): void {
        const action=this.router.navigateByUrl('/confirm-dialog');
        //  const action = confirm('Are you sure you want to delete this company ' + id + '?');
         if (action) {
           this.adminService.deleteCompany(id).subscribe(
     
             // (res) => { this.products = this.products.filter(product => product.id !== id); },
             // (err) => { alert(err.message); });
     
             (res) => { this.companies = this.companies.filter(company => company.id !== id); },
             (err) => {
               alert(err.message);
               this.companies = this.companies.filter(company => company.id !== id);
             });
         }
        }
      //  ngAfterViewInit() {
      //   this.dataSource.paginator = this.paginator;
      // }
   
     
    }
     
   
      
      






