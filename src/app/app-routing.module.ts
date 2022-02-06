import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddproductComponent } from './product/addproduct/addproduct.component';
import { GetproductsComponent } from './product/getproducts/getproducts.component';

const routes: Routes = [
  { path: '', redirectTo: '/getproducts', pathMatch: 'full' },
  { path: 'getproducts', component: GetproductsComponent },
  { path: 'addproduct', component: AddproductComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}