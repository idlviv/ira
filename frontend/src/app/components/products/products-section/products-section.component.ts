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

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => console.log("section id parameter",params['id']));

    let searchQuery = {
      params: {
        'category': 'Toys'
      }
    };

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
        })
  }
}
