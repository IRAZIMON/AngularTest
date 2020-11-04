import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { LoginService } from './../../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService,
     private router: Router,
     private dataService:DataService,
     private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('navbar')
  
  }
 
  public logOutDialog(): void {
   if (confirm('Are you sure that you want to logout?')) {
          this.loginService.token = ('');
          this.loginService.type = ('');
          this.router.navigateByUrl('login');
        }
    
      }

       public isLoggedIn(): boolean{
         return this.dataService.getLoggedIn();
       }
      
       public login(): void{
         this.dataService.setLoggedIn(true);
          this.router.navigateByUrl('login');
   
      }
       public logout(): void{
         this.dataService.setLoggedIn(false);
      }
      
     
    
    
     
    //  public About():void{
    //     this.router.navigateByUrl('about');
    //   }
      }

     

  
  

