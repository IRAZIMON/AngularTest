import { Title } from '@angular/platform-browser';
import { Credentials } from './../../model/Credentials';


import { LoginService } from './../../service/login.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';

import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public credentials = new Credentials();

  public constructor(private router: Router, 
    private loginService: LoginService,
    private title:Title
    ) { }

  ngOnInit(): void {
    this.title.setTitle('login')
  }
  public loginToServer(): void {
    this.loginService.loginRequest(this.credentials).subscribe(
      (loginResult) => {
        sessionStorage.setItem('Authorization', loginResult.token),
          alert(loginResult.token + ' ' + loginResult.type);
          this.loginService.token = loginResult.token;
        this.loginService.type = loginResult.type;
        this.loginService.isLoggedIn = true;

        this.router.navigateByUrl(this.loginService.type);

      },
      (err) => {console.log(err.message); });
  }

  public goBack():void{
    this.router.navigate(['admin']);
    }



}



