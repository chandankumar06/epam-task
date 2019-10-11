import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '.././app.service';

import { ProductDetails } from './../interfaces/productDetails.interface';
declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  model_flag: boolean;
  productDetails = new ProductDetails();
  public products: any = [];
  search_query = ''
  add_update = "Add Product"
  constructor(private appService: AppService, private router: Router) {
    console.log("ProductComponent constuctor()")
  }

  ngOnInit() {
    this.fetchproducts();
  }

  fetchproducts() {
    this.appService.fetchProducts().subscribe((response: any) => {
      console.log("Result", response);
      if (response.length > 0) {
        this.products = response
        console.log(this.products)
      }

    })
  }

  search(){
    this.appService.searchProduct(this.search_query).subscribe((response: any) => {
      console.log("Result", response);
      if (response.length > 0) {
        this.products = response
        console.log(this.products)
      }
    })
  }


  onKeyUp(){
    console.log("onKeyUp",this.search_query)
    if(this.search_query==""){
      this.fetchproducts();
    }
  }


  i_value = 0
  showAddProduct() {
    this.model_flag = true
    this.add_update = "Add Product";
    this.productDetails = new ProductDetails();
    $("#testmodal").modal('show');
  }

  showUpdateProduct(i, p_id) {
    this.model_flag = true
    this.add_update = "Update Product";
    console.log("showUpdateProduct()", i, p_id)
    this.i_value = i

    console.log(this.products)
    this.productDetails = this.products[i];
    $("#testmodal").modal('show');
  }

  addOrUpdateProduct() {
    console.log("addOrUpdateProduct", this.add_update)
    if (this.add_update == "Update Product") {
      this.updateProduct()
    } else {
      this.addProduct()
    }
    this.model_flag = false
  }

  addProduct() {
    console.log("addProduct", this.productDetails)
    var today = Number(new Date())
    this.productDetails.p_id = today.toString();
    this.appService.addProduct(this.productDetails).subscribe((response) => {
      this.products.push(this.productDetails)
      console.log("response==adedd", response)
      this.productDetails = new ProductDetails();
      $("#testmodal").modal('hide');
    })
    this.model_flag = false
  }

  updateProduct() {
    console.log("update==>>", this.productDetails)
    $("#testmodal").modal('hide');
    this.appService.updateProduct(this.productDetails).subscribe((response) => {
      if (response != null) {
        this.products[this.i_value] = this.productDetails;
        this.productDetails = new ProductDetails();
      }
    })
    this.model_flag = false
  }


  deleteProduct(i, _p_id) {
    if (window.confirm('It may Affect the other tables..Are you sure! Still you want to delete this Product ?')) {
      console.log("product delete", i, _p_id)
      var p_id = { p_id: _p_id }
      this.appService.deleteProduct(p_id).subscribe((response) => {
        if (response != null) {

          console.log(this.products[i])
          this.products.splice(i, 1);
        }

      })
    }
  }
}
