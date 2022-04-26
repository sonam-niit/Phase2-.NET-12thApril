import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  customers:Customer[]=[
    {id:1,name:"sonam",email:"sonam@gmail.com",address:"mumbai"},
    {id:2,name:"akshita",email:"akshita@gmail.com",address:"kolkata"},
    {id:3,name:"Alex",email:"alex@gmail.com",address:"newyork"}
  ]

  getCustomers(){
    return this.customers;
  }
}
