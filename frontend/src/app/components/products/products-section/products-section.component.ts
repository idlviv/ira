import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IProduct} from "../../../interfaces/i-product";
import {ProductService} from "../../../services/product.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-products-section',
  templateUrl: 'products-section.component.html',
  styleUrls: ['products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {
  products: IProduct[];
  searchQuery: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.searchQuery = {
      'category': 'Toys'
    };
    this.onChangeRoute(this.searchQuery);

    this.route.params.subscribe(params => {
      // console.log("products side menu id parameter",params['cat'],' ',params['subCat']);
      console.log("section id parameter",params['category']);
      this.searchQuery = {
        'category': params['category']
      };
      this.onChangeRoute(this.searchQuery)
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
