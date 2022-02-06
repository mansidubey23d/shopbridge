import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetproductsComponent } from './getproducts/getproducts.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    GetproductsComponent,
    AddproductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  exports: [
    GetproductsComponent,
    AddproductComponent
  ]
})
export class ProductModule { }
