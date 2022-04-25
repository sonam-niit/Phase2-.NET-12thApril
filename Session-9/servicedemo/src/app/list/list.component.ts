import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  people=[
    {name:"sonam",email:"sonam@gmail.com",country:"India"},
    {name:"Akshita",email:"Alkshita@gmail.com",country:"US"},
    {name:"Karan",email:"karan@gmail.com",country:"UK"},
    {name:"Jacob",email:"jacob@gmail.com",country:"Singapour"}
  ]

}
