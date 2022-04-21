import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fullname:string="Sonam Soni";
  url:string="http://www.google.com";
  targetvalue:string="_blank"
  imgurl:string="./assets/images/angular.png";
  h:number=200;
  w:number=300;
}
