import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [
  { path:'',redirectTo:'dashboard',pathMatch:'full'},
  { path: 'dashboard',component:DashboardComponent},
  { path: 'products',component:ProductsComponent},
  { path: 'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
