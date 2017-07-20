import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ValidateService} from '../../../services/validate.service';
import {ProductService} from '../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-add-product',
  templateUrl: 'add-product.component.html',
  styleUrls: ['add-product.component.css']
})

export class AddProductComponent implements OnInit {
  itemNumber: String;
  name: String;
  price: Number;
  mainImgSrc: String;
  @Output() updateProducts = new EventEmitter();

  constructor(
    private authService: AuthService,
    private validateService: ValidateService,
    private productService: ProductService,
    private flashMessage: FlashMessagesService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onAddProductSubmit() {

    const product = {
      itemNumber: this.itemNumber,
      name: this.name,
      price: this.price,
      mainImgSrc: this.mainImgSrc,
    };

    this.productService.addProduct(product)
      .subscribe(
        data => {
          if (data.success) {
            this.flashMessage.show(
              'Added successfully',
              {
                cssClass: 'alert-success',
                timeout: 3000
              });
            this.updateProducts.emit();
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
