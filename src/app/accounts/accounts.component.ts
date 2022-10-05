import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from './accounts.service';
import { AuthService } from './auth.service';
import { CustomerModel } from '../customers/customers.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  errorMessage: string = "";

 account : CustomerModel = {
   id: 0,
   username: '',
   password: '',
   email:'',
   firstName: '',
   lastName: '',
   image:''
 }
 

  constructor(private accountService: AccountsService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    
    let accountReturn = this.accountService.validate(this.account);
    console.log(accountReturn);
    if(accountReturn.id !=0){
      
        this.authService.isLoggedIn = true;

      
      this.router.navigate(["."]);
    }else{
      
      this.errorMessage = 'Invalid username/password';
      
    }
    

}

}
