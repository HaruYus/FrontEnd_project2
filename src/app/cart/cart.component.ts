import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../products/product.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProduct: ProductModel = {

    id: 0,
    name: '',
    price: 0,
    stock: 0,
    image: '',  

  }

  constructor(private cartservice: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  addingItem(): void {

   this.cartservice.addItem(this.cartProduct).subscribe((response)=>{
      console.log(response);
    });

}

}