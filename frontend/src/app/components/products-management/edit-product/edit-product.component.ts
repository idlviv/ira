import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {MdDialog, MdDialogRef} from '@angular/material';
import {AddProductModalComponent} from "../add-product-modal/add-product-modal.component";


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProductComponent implements OnInit {

  products: Object;
  isActive: Boolean = false;
  dialogRef: MdDialogRef<any>;

  constructor(
    public dialog: MdDialog,
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
  onClickEditBtn(e, _id) {
    // let p = e.srcElement.parentElement.parentElement;
    // console.log( p);
    // this.isActive = !this.isActive;
    // console.log(this.isActive);

    // this.dialog.open(AddProductModalComponent);
    this.dialogRef = this.dialog.open(AddProductModalComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
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
