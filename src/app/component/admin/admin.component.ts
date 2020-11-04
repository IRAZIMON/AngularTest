import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

getAllcom : boolean;
getAllcus:boolean;

  

  constructor(
    private title:Title,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.title.setTitle('admin')

  }


  getAllComButten():void {

  this.getAllcom=true;
  this.getAllcus=false;
  }

  getAllCusButten():void {

    this.getAllcus=true;
    this.getAllcom=false;
      }
      public goBack():void{
        this.router.navigate(['/home']);
        }
    

}


