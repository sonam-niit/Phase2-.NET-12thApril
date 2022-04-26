import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message:string="Welcome to the"+
   "world of pipes"
  pi:number=3.1515927;
  num1=3.678965;
  num2=5678.789;
  today= new Date();
  user={fname:"Sonam",lname:"Soni", email:"sonam@gmail.com"};
  name:string="Sonam Soni";
}
