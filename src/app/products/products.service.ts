import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string = "http://localhost:5555/api/products";

  constructor(private httpClient: HttpClient) { }

  displayAllProducts(): Observable<ProductModel[]>{

    return this.httpClient.get<ProductModel[]>(this.baseUrl);
  }
}
