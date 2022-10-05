import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from '../customers/customers.model';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newAccount: CustomerModel = {
    id: 0,
    username: '',
    password: '',
    email:'',
    firstName: '',
    lastName: '',
    image:''
  }

  madeAccount: CustomerModel = {
    id: 0,
    username: '',
    password: '',
    email:'',
    firstName: '',
    lastName: '',
    image:''
  }

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewAccount(){
    
    this.registerService.addNewCustomer(this.newAccount).subscribe((response)=>{
      console.log(response);
      this.madeAccount = response;})
    this.router.navigate(["."]);

  }

}
