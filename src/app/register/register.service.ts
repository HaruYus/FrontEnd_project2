import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from '../customers/customers.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl: string = "http://localhost:5555/api/users";

  constructor(private httpClient: HttpClient) { }

  addNewCustomer(customer: CustomerModel): Observable<CustomerModel>{

    return this.httpClient.post<CustomerModel>(this.baseUrl, customer);

  }
}
