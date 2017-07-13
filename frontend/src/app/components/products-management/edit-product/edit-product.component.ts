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
  isEditBtnShow: Boolean = true;

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
    this.isEditBtnShow = false;
  }

  onClickCancelBtn(i, _id) {
    this.selectedRow = null;
    this.isEditBtnShow = true;
  }

  onClickDelBtn(i, _id) {
    this.selectedRow = null;
    this.isEditBtnShow = true;
    console.log(_id);

    this.productService.deleteProduct(_id)
      .subscribe(
        data => {
          console.log(data);
          if (data.success) {
          this.flashMessage.show(
            'Delete successfully, Number Of Deleted Elements ' + data.numberOfDeletedElements,
            {
              cssClass: 'alert-success',
              timeout: 3000
            });
          // this.router.navigate(['/profile']);
        } else {
          this.flashMessage.show(
            'Delete failed',
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

  onEditProductSubmit(product, i) {
    this.selectedRow = null;
    this.isEditBtnShow = true;
    console.log(product);

    this.productService.editProduct(product)
      .subscribe(
        data => {
          if (data.success) {
            this.flashMessage.show(
              'Edited successfully',
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
