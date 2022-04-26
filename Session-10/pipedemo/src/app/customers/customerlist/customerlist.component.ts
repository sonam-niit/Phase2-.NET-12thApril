import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer.model';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  constructor(private service:CustomerService) { }

  customers:Customer[];
  ngOnInit(): void {
    this.customers= this.service.getCustomers();
  }

}
