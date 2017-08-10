import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../../../interfaces/i-product';
import {ProductService} from '../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: IProduct[];
  searchQuery: any;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchQuery = {
        'catalog.category0': params.category0,
        'catalog.category1': params.category1,
      };
      this.onChangeRoute(this.searchQuery);
    });
  }

  onChangeRoute(searchQuery) {
    this.productService.getQueriedProducts(searchQuery)
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
        });
  }
}
