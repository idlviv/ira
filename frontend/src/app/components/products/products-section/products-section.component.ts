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
      'catalog.category0': 'toys'
    };
    this.onChangeRoute(this.searchQuery);

    this.route.params.subscribe(params => {
      console.log("section id parameter" ,params['category0'], '', params['category1']);

      if(params.category1 === 'goBack') {
        this.searchQuery = {};
        console.log('back');
      } else {
        console.log('-params.category0', params.category0);
        if(params.category0 === null) {
          console.log('--params.category0', params.category0);
          console.log('--params.category1', params.category1);
          this.searchQuery = {
            'catalog.category0': params.category1,
          };
        } else {
          this.searchQuery = {
            'catalog.category0': params.category0,
            'catalog.category1': params.category1
          };
        }
      }


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
