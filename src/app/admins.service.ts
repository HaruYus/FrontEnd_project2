import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerModel } from './customers/customers.model';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  baseUrl : string = "url"

  constructor(private httpClient: HttpClient) { }

    
}
