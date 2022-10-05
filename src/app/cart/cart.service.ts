import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl: string = "http://localhost:5555/api/cart";

  constructor(private httpClient: HttpClient) { }

  addItem(itemAdd : ProductModel) : Observable<ProductModel>{

    return this.httpClient.post<ProductModel>(this.baseUrl, itemAdd);

  }


}
