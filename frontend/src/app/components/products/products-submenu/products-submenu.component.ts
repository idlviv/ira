import { Component, OnInit, Output} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ICatalog} from '../../../interfaces/i-catalog';
import {catalog} from '../../../data/catalog';
import {MyUrlSerializer} from '../../../services/url-serializer.service';
import {ProductService} from '../../../services/product.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-products-submenu',
  templateUrl: './products-submenu.component.html',
  styleUrls: ['./products-submenu.component.css']
})
export class ProductsSubmenuComponent implements OnInit {

  category0: string;
  category1: string;
  currentCategory1: number;

  prop1 = true;
  prop2 = true;

  catalog: any;

  submenuList: string[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private customUrlSerializer: MyUrlSerializer,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
    this.productService.getCatalog()
      .subscribe(
        catalog => {
          this.catalog = catalog;

          console.log('catalog', this.catalog);
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

    this.route.params
      .subscribe(params => {
      this.category0 = params.category0;
      this.category1 = params.category1;

      // this.catalog.forEach((value) => {
      //   if (params.category0 === value.category0) {
      //     this.submenuList = value.category1;
      //   }
      // });
    });

    // this.productService.getCatalog()
    //   .subscribe(
    //     catalog => {
    //       this.catalog = catalog;
    //
    //       console.log('catalog', this.catalog);
    //     },
    //     (error) => {
    //       this.flashMessage.show(
    //         error,
    //         {
    //           cssClass: 'alert-danger',
    //           timeout: 3000
    //         });
    //       return false;
    //     });
    //
    // console.log('url', this.router.url);
    // this.route.params.subscribe(
    //   params => {
    //   this.category0 = params.category0;
    //   this.category1 = params.category1;
    //
    //   this.catalog.forEach((value) => {
    //     if (params.category0 === value.category0) {
    //       this.submenuList = value.category1;
    //     }
    //   });
    // });
  }

  go(category1, i) {
    this.currentCategory1 = i;
    this.category1 = category1;
  }

  // navigate(category0, category1, i) {
  //   this.currentCategory1 = i;
  //   console.log('category0', this.category0);
  //   console.log('category1', category1);
  //   if (category0) {
  //     this.router.navigate(['/products', {outlets: {primary: category0, productsSubmenu:  category0}}]);
  //   } else {
  //     this.router.navigate(['/products', {outlets: {primary: this.category0 + '/' + category1,
  //       productsSubmenu:  this.category0 + '/' + category1}}]);
  //   }
//   // }
//
//   setClasses() {
//     const classes = {clicked: this.prop1, b: this.prop2};
//     return classes;
//   }
}

