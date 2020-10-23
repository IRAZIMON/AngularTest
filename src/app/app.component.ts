import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public constructor(private loginService: LoginService, private router: Router) { }

//   public logOutDialog(): void {
//     if (confirm('Are you sure that you want to logout?')) {
//       this.loginService.token = ('');
//       this.loginService.type = ('');
//       this.router.navigateByUrl('login');
//     }

//   }
//   public isLoggedIn():boolean{
//     return this.loginService.isLoggedIn;
//   }

  
 }


