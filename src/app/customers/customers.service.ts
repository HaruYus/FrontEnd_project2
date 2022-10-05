import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from './customers.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  baseUrl: string = "http://localhost:5555/api/users";

  constructor(private httpClient: HttpClient) { }

  displayAllCustomers(): Observable<CustomerModel[]>{

    return this.httpClient.get<CustomerModel[]>(this.baseUrl);
  }
}
