import { Title } from '@angular/platform-browser';
import { AdminService } from './../../service/admin.service';
import { Company } from './../../model/company';
import { CompanyService } from './../../service/company.service';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllCompaniesComponent } from '../get-all-companies/get-all-companies.component';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  public company = new Company();
  public type: string = 'Add';
  public id: number;
  location: any;

  constructor(
   
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService,
    private router: Router,
    private dataService: DataService,
    private title:Title){

     this.id = Number(activatedRoute.snapshot.params.id);}

  ngOnInit(): void {

    this.title.setTitle('company-details')

    if (this.id !== 0) {
      this.type = 'Update';
      this.company.id = this.id;

     this.company = this.dataService.getCompanies().filter(c => c.id === this.company.id)[0];
    } else {
      this.type = 'Add';
    }

  }


  public addOrUpdateCompany(): void {

    alert(this.company.name + ' ' + this.company.email + ' ' + this.company.password);
    alert(JSON.stringify(this.company));
    if (this.id === 0) {
      this.adminService.addCompany(this.company).subscribe(
        (res) => { alert('Company Added');
         let companyIndex = this.dataService.companies.findIndex(c => c.id === this.company.id);
         this.dataService.companies.splice(companyIndex,1,this.company);
       },
        (err) => { alert(err.message); });
    } else {
      this.adminService.updateCompany(this.company).subscribe(
        (res) => { alert('Company Updated'); 
         let companyIndex = this.dataService.companies.findIndex(c => c.id === this.company.id);
         this.dataService.companies.splice(companyIndex,1,this.company);
      },
        (err) => { alert(err.message); });
        
    }

   
    this.router.navigateByUrl('/get-All-Companies');
  

  }
  public goBack():void{
    this.router.navigate(['get-All-Companies']);
    }

  }


