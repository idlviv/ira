import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {

  products: Object;
  isActive: Boolean = false;

  constructor(
    private productService: ProductService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        (products) => {
          this.products = products;
        },
        (error) => {
          this.flashMessage.show(
            error,
            {
              cssClass: 'alert-danger',
              timeout: 3000
            });
          return false;
        })
  }
  onClickEditBtn(e) {
    let p = e.srcElement.parentElement.parentElement;
    console.log( p);
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }

  onEditProductSubmit(_id) {
    // this.flashMessage.show(
    //   this.products
    //   {
    //     cssClass: 'alert-danger',
    //     timeout: 1000
    //   });
    console.log(_id);
  }


}
