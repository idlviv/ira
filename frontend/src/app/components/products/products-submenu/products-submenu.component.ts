import { Component, OnInit, Output} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ICatalog} from "../../../interfaces/i-catalog";
import {catalog} from '../../../data/catalog';

@Component({
  selector: 'app-products-submenu',
  templateUrl: './products-submenu.component.html',
  styleUrls: ['./products-submenu.component.css']
})
export class ProductsSubmenuComponent implements OnInit {
  category0: string;
  category1: string;
  // clickedButton: boolean = false;

  catalog: ICatalog[];
  submenuList: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.catalog = catalog;

    this.route.params.subscribe(params => {
      console.log('params', params);
      this.category0 = params.category0;
      this.category1 = params.category1;

      this.catalog.forEach((value) => {
        if(params.category0 === value.category0) {
          this.submenuList = value.category1;
        }
      })

    });
  }

  navigate(category0, category1) {

    console.log('category0', this.category0);
    console.log('category1', category1);
    if(category0) {
      this.router.navigate(['/products', {outlets: {primary: category0,
        productsSubmenu:  category0}}]);
    } else {
      this.router.navigate(['/products', {outlets: {primary: this.category0 + '/' + category1,
        productsSubmenu:  this.category0 + '/' + category1}}]);
    }
  }
}
