import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {IProduct} from "../../../interfaces/i-product";
import {ICatalog} from "../../../interfaces/i-catalog";
import {ProductService} from "../../../services/product.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {catalog} from '../../../data/catalog';

@Component({
  selector: 'app-products-side-menu',
  templateUrl: './products-side-menu.component.html',
  styleUrls: ['./products-side-menu.component.css']
})

export class ProductsSideMenuComponent implements OnInit {
  urlSnapShot: any;
  showMain: Boolean = true;
  mainCategory: String;
  products: IProduct[];
  categories0: Array<String>;
  categories: Array<String>;
  categories0Products: IProduct[];
  categories1: Array<String>;
  level: Number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private flashMessage: FlashMessagesService,
      ) {
  }

  navigateMain(category) {
    console.log('this.route', this.route);
    // console.log('path_category main', category);
    this.router.navigate([{outlets: {primary: category, productsSideMenu: category}}],
      {relativeTo: this.route}
    );
    this.mainCategory = category;
    this.showMain = !this.showMain;
    console.log('this.showMain', this.showMain);
  }

  navigateSub(category) {
    console.log('path_category sub', category);
    this.router.navigate([{outlets: {primary: category,
        productsSideMenu: category}}],
      {relativeTo: this.route}
    );
    // this.router.navigate([{outlets: {primary: this.mainCategory + '/' + category,
    //     productsSideMenu: this.mainCategory + '/' + category}}],
    //   {relativeTo: this.route}
    // );
  }

  // navigate(path_category, path_subCategory) {
  //   console.log('path_category', path_category, 'path_subCategory', path_subCategory);
  //   this.router.navigate([{outlets: {primary: path_category + '/' + path_subCategory,
  //       productsSideMenu: path_category + '/' + path_subCategory}}],
  //     {relativeTo: this.route}
  //   );
  // }

  ngOnInit() {
    this.getRootCategory();

    this.route.params.subscribe(params => {
      if (params['category0']) {
        catalog.map((cat) => {
          if (cat.category0 === params['category0'])
          return this.categories = cat.category1;
        })
      } else {
        this.getRootCategory();
      }
      // console.log(this.categories);
      console.log("products side menu id parameter",params['category0'], ' ', params['category1']);
    });

    // this.onChangeRoute(searchQuery);

  }

  getRootCategory() {
    this.categories = catalog.map((cat) => cat.category0 );

  }

  onChangeRoute(searchQuery) {
/* ---- for mongo
  this.productService.getDistinctCategories(searchQuery[0])
      .subscribe(
        (categories) => {
          this.categories0 = categories;
        },
        (error) => {
          this.flashMessage.show(
            error,
            {
              cssClass: 'alert-danger',
              timeout: 3000
            });
          return false;
        });*/

  }

}
