import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from './customers.model';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  allCustomers: CustomerModel[] = [];



  constructor(private customersService: CustomersService, private router: Router) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {

    this.customersService.displayAllCustomers().subscribe((response)=>{
      console.log(response);
      this.allCustomers = response;
    });

  }

}
