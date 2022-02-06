import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/service/product.service';
import { ProductModel  } from '../model/products.model';

@Component({
  selector: 'app-getproducts',
  templateUrl: './getproducts.component.html',
  styleUrls: ['./getproducts.component.scss']
})
export class GetproductsComponent implements OnInit {
  p: number = 1;
  product:any;
  productModelObj: ProductModel = new ProductModel();
  constructor(public productservice: ProductService,
   ) {
    
   }
  
  ngOnInit(): void {
    this.getallProducts();
    
  }
  getallProducts() {
    this.productservice.getProducts().subscribe(res=> {
      console.log(res);
     this.product = res;
    });
  }
 
  deleteProducts(data: any) {
    this.productservice.deleteProducts(data).subscribe(res=> {
      alert('Product deleted');
      this.ngOnInit();
    })
  }

}
