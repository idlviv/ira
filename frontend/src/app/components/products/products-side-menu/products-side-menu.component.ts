import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {IProduct} from "../../../interfaces/i-product";
import {ProductService} from "../../../services/product.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-products-side-menu',
  templateUrl: './products-side-menu.component.html',
  styleUrls: ['./products-side-menu.component.css']
})

export class ProductsSideMenuComponent implements OnInit {
  urlSnapShot: any;
  products: IProduct[];
  categories: Array<String>;
  SubCategories: Array<String>;
  level: Number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService,
              private flashMessage: FlashMessagesService) {
  }

  navigate(path_category) {
    console.log('path_category', path_category);
    this.router.navigate([{outlets: {primary: path_category, productsSideMenu: path_category}}],
      {relativeTo: this.route}
    );
  }

  // navigate(path_category, path_subCategory) {
  //   console.log('path_category', path_category, 'path_subCategory', path_subCategory);
  //   this.router.navigate([{outlets: {primary: path_category + '/' + path_subCategory,
  //       productsSideMenu: path_category + '/' + path_subCategory}}],
  //     {relativeTo: this.route}
  //   );
  // }

  ngOnInit() {
    this.level = 0;
    let searchQuery = 'category';


    this.route.params.subscribe(params => {
      console.log("products side menu id parameter",params['category'], ' ', params['subCategory']);
    });

    this.onChangeRoute(searchQuery);

  }

  onChangeRoute(searchQuery) {
    this.productService.getDistinctProducts(searchQuery)
      .subscribe(
        (categories) => {
          this.categories = categories;
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
