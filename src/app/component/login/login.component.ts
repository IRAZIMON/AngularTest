import { getLoginClass } from './../../model/getLoginModel';

import { LoginService } from './../../service/login.service';
import { Router } from '@angular/router';
import { userInformation } from './../../model/user-information';
import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public userInformation= new userInformation();
  public constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }
  public loginToServer(): void {
    this.loginService.getLogin(this.userInformation).subscribe(
      (getLoginClass) => {
        alert(getLoginClass.token+ ' ' + getLoginClass.type);
        this.loginService.token = getLoginClass.token;
        this.loginService.type = getLoginClass.type;
        this.loginService.isLoggedIn = true;

        this.router.navigateByUrl(this.loginService.type);

      },
     (err) => { alert(err.message); });
  }

}
// change hardcoded type admin in loginmodel


