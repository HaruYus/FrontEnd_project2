import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from '../customers/customers.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  // accRes: CustomerModel = {
  //   id: 0,
  //   username: '',
  //   password: '',
  //   email: '',
  //   firstName: '',
  //   lastName: '',
  //   image: ''
  // }

  constructor(private httpClient: HttpClient) { }

  baseUrl: string = "http://localhost:5555/api/users/Login";


  validate(account: CustomerModel): CustomerModel {

    if(account.username=='admin'&&account.password=='admin')
    {

      account.id=101;
      account.firstName="Dan";
      account.lastName="Smith";

    }
    else{
      this.httpClient.post<CustomerModel>(this.baseUrl, account).subscribe((response) => {
      console.log(response);
      account = response;
      

    })
    
    }
    return account;

    
  }

}
