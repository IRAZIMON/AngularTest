import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

getAllcom : boolean;
getAllcus:boolean;

  

  constructor() { }

  ngOnInit(): void {
  }


  getAllComButten():void {

  this.getAllcom=true;
  this.getAllcus=false;
  }

  getAllCusButten():void {

    this.getAllcus=true;
    this.getAllcom=false;
      }
     

}


