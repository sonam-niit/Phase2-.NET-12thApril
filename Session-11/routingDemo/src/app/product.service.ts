import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private baseUrl:string="./assets/json/data.json/";

  getAllProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl);
  }

  getProductById(id:number):Observable<Product[]> {
   // return this.http.get<Product[]>(this.baseUrl+"/"+id);
    return this.getAllProducts().pipe(
      map(data => data.filter(x => x.id === id)));
  }

  getUserById(id:number):Observable<Product> {
    return this.http.get<Product>(this.baseUrl+"/"+id);
   }
}
