import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {

  products: Object;
  isActive: Boolean = false;
  selectedRow : Number;
  isEditBtnShowOnStart: Boolean = true;

  constructor(
    private productService: ProductService,
    private flashMessage: FlashMessagesService,
    private router: Router,
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

  onClickEditBtn(i, _id) {
    this.selectedRow = i;

    this.isEditBtnShowOnStart = false;

    // let editProductsTable = document.querySelectorAll('#editProductsTable');
    // console.log(editProductsTable);
    // let p = e.srcElement.parentElement.parentElement;
    // console.log(e.target.parentElement);
    // this.isActive = !this.isActive;
    // console.log(this.isActive);
  }

  onClickSaveBtn(i, _id) {
    this.selectedRow = null;
    this.isEditBtnShowOnStart = true;


    // this.isEditBtnShowOnStart = false;

    // let editProductsTable = document.querySelectorAll('#editProductsTable');
    // console.log(editProductsTable);
    // let p = e.srcElement.parentElement.parentElement;
    // console.log(e.target.parentElement);
    // this.isActive = !this.isActive;
    // console.log(this.isActive);
  }

  onEditProductSubmit(product, i) {
    this.selectedRow = null;
    this.isEditBtnShowOnStart = true;
    console.log(product);

    this.productService.editProduct(product)
      .subscribe(
        data => {
          if (data.success) {
            console.log('success');
            this.flashMessage.show(
              'Edited successfuly',
              {
                cssClass: 'alert-success',
                timeout: 3000
              });
            // this.router.navigate(['/profile']);
          } else {
            this.flashMessage.show(
              'Adding failed',
              {
                cssClass: 'alert-danger',
                timeout: 3000
              });
            // this.router.navigate(['/profile']);
          }
        },
        error => {
          if (error.status === 401) {
            this.flashMessage.show(
              'Please login',
              {
                cssClass: 'alert-danger',
                timeout: 3000
              });
            this.router.navigate(['/login']);
          }
        }
      );


  }



}
