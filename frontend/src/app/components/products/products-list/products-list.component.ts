import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../../../interfaces/i-product';
import {ProductService} from '../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {localCatalog} from '../../../data/catalog';
import {ICatalog} from '../../../interfaces/i-catalog';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: IProduct[];
  searchQuery: any;
  catalog: ICatalog[];
  category0: string;
  category1: string;
  submenuList: string[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService,
              private flashMessage: FlashMessagesService) {}

  ngOnInit() {
    this.catalog = localCatalog;
    this.route.params.subscribe(params => {
      this.category0 = params.category0;
      this.category1 = params.category1;
    console.log('product list params', params);
      // this.category1 = params.category1;
      this.catalog.forEach((value) => {
        if (params.category0 === value.category0) {
          this.submenuList = value.category1;
        }
      });
    });
  }

}
