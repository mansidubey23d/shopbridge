import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { ProductModel  } from '../model/products.model';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  
  addProducts !: FormGroup;
  productModelObj: ProductModel = new ProductModel();
  constructor(private formbuilder: FormBuilder,
    public productservice: ProductService,
    public router: Router) { }

  
  ngOnInit(): void {
    this.addProducts = this.formbuilder.group({
      product_name: [''],
      product_price: ['']
    })
  }
  postProduct() {
    this.productModelObj.product_name = this.addProducts.value.product_name;
    this.productModelObj.product_price = this.addProducts.value.product_price;
    this.productservice.postProducts(this.productModelObj).subscribe(res=> {
      console.log(res);
      alert('Products added');
      this.router.navigate(['/getproducts']);
    },
    error=> {
      alert('Try Again');
    })
  }

}
