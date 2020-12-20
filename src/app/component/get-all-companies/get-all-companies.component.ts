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
  static ngOnInit(): null {
    throw new Error('Method not implemented.');
  }
  public companies: Company[];
  dataSource: MatTableDataSource<Company[]>;
  location: any;

  constructor(private title: Title,
    private dataService: DataService,
    private adminService: AdminService,
    private router : Router) { }

    ngOnInit(): void {
      this.title.setTitle('get-All-Companies');
  
      this.adminService.getCompanies().subscribe(
         (companies)  => { this.companies = companies;
                           this.dataService.setCompanies(this.companies);
  
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

   
    
       public deleteCompany(id: number): void {
        const action = confirm('Are you sure you want to delete this company ' + id + '?');
         if (action) {
           this.adminService.deleteCompany(id).subscribe(

             (res) => { this.companies = this.companies.filter(company => company.id !== id); },
             (err) => {
               alert(err.message);
               this.companies = this.companies.filter(company => company.id !== id);
             });
         }
        }
      
   
        public goBack():void{
          this.router.navigate(['admin']);
          }
    }
     
   
      
      






