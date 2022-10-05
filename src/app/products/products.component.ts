import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from './product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  allProducts: ProductModel[] = [];



  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {

    this.productsService.displayAllProducts().subscribe((response)=>{
      console.log(response);
      this.allProducts = response;
    });

  }

}
