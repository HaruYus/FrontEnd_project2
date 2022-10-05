import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { LogoutComponent } from './accounts/logout/logout.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  { path: 'customers', component: CustomersComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'login', component: AccountsComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'register', component: RegisterComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
