import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {IProduct} from "../../../interfaces/i-product";
import {ICatalog} from "../../../interfaces/i-catalog";
import {ISubMenu} from "../../../interfaces/i-submenu";
import {ProductService} from "../../../services/product.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {catalog} from '../../../data/catalog';
import {SubMenu} from "../../../interfaces/submenu";



@Component({
  selector: 'app-products-side-menu',
  templateUrl: './products-side-menu.component.html',
  styleUrls: ['./products-side-menu.component.css']
})

export class ProductsSideMenuComponent implements OnInit {
  urlSnapShot: any;
  showSub: Boolean = true;
  mainCategory: String;
  products: IProduct[];
  categories0: Array<String>;
  catalog: ICatalog[];
  categories0Products: IProduct[];
  categories1: Array<String>;
  level: Number;
  main: any;
  sub: any = 0;
  selectedCat: any;
  selected: any;


  menuList: SubMenu = new SubMenu('', []);
  mainMenuList: any = {parent: '', items: []};
  subMenuList: ISubMenu;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private flashMessage: FlashMessagesService,

      ) {
  }

  navigate(category0, category1, sub, i) {
    this.main = category0;
    this.selectedCat = i;

    this.sub = sub;
    console.log('category0', category0);
    console.log('category1', category1);
    // console.log('path_category main', category);
    // this.router.navigate(['/products/('+ category +'//productsSideMenu: '+ category +')']);
    //
    this.router.navigate(['/products', {outlets: {primary: category0 + '/' + category1,
      productsSideMenu:  category0 + '/' + category1}}]);
    // this.router.navigate([{outlets: {primary: category, productsSideMenu: category}}],
    //   {relativeTo: this.route}
    // );
    // this.mainCategory = category;
    // this.showMain = !this.showMain;
    // console.log('this.showMain', this.showMain);
  }

  //
  // navigateSub(category) {
  //   console.log('path_category sub', category);
  //   this.router.navigate(['/products', {outlets: {primary: category,
  //       productsSideMenu: category}}],
  //     {relativeTo: this.route}
  //   );
  //   // this.router.navigate([{outlets: {primary: this.mainCategory + '/' + category,
  //   //     productsSideMenu: this.mainCategory + '/' + category}}],
  //   //   {relativeTo: this.route}
  //   // );
  // }

  // navigate(path_category, path_subCategory) {
  //   console.log('path_category', path_category, 'path_subCategory', path_subCategory);
  //   this.router.navigate([{outlets: {primary: path_category + '/' + path_subCategory,
  //       productsSideMenu: path_category + '/' + path_subCategory}}],
  //     {relativeTo: this.route}
  //   );
  // }

  navigateMenu(category0, category1) {
    console.log(category0, category1);

    this.router.navigate(['/products', {outlets: {primary: category0 + '/' + category1,
      productsSideMenu:  category0 + '/' + category1}}]);
  }

  ngOnInit() {
    this.getCategory();

    this.menuList.parent = null;//this.mainMenuList.parent;
    this.menuList.items = this.mainMenuList.items;

    this.route.params.subscribe(params => {
        if (params.category1 === 'goBack') {
          this.menuList.parent = null;
          this.menuList.items = this.mainMenuList.items;
          console.log('back menulist', this.mainMenuList);
        } else {
          if (params.category0 === null){
            this.catalog.forEach((value, index) => {
              if (value.category0 === params.category0) {
                this.menuList.items = value.category1;
                this.menuList.parent = value.category0;
              }
            });
          } else {
            this.catalog.forEach((value, index) => {
              if (value.category0 === params.category1) {
                this.menuList.items = value.category1;
                this.menuList.parent = params.category1;
              }
            });
          }

        }



      // if (params['category0']) {
      //   catalog.map((cat) => {
      //     if (cat.category0 === params['category0'])
      //     return this.categories = cat.category1;
      //   })
      // } else {
      //   this.getRootCategory();
      // }
      // console.log(this.categories);
      console.log("products side menu id parameter",params['category0'], ' ', params['category1']);
    });

    // this.onChangeRoute(searchQuery);
  }

  select(item, item1){
    this.selected = (this.selected === item ? null : item);
  }

  isActive(item){
    return this.selected === item;
  }

  getCategory() {
    // this.categories = catalog.map((cat) => cat.category0 );
    this.catalog = catalog;

    this.mainMenuList.parent = null;//this.catalog[0].category0;
    this.catalog.forEach((value) => {
      this.mainMenuList.items.push(value.category0);
    })

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
