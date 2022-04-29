import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private service:ProductService, private route:ActivatedRoute,
    private location:Location) { }

  products:Product[];

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.service.getProductById(Number(id)).subscribe(x=>this.products=x);
  }

  goBack(){
    this.location.back();
  }
}
