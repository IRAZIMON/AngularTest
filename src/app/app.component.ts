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


  
 }


