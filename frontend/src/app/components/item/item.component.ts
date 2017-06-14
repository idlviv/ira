import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  product: Object;
  product1: string;

  constructor(private productService: ProductService,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        (product) => {
          this.product = product;
          this.product1 = this.product[0].name;
          // this.product1= this.product[0];

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

}
