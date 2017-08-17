import { Component, OnInit, Output} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ICatalog, ISubmenuList} from '../../../interfaces/i-catalog';
import {MyUrlSerializer} from '../../../services/url-serializer.service';
import {AppComponent} from '../../../app.component';

@Component({
  selector: 'app-products-side-menu',
  templateUrl: './products-side-menu.component.html',
  styleUrls: ['./products-side-menu.component.css']
})

export class ProductsSideMenuComponent implements OnInit {
  category0: string;
  category1: string;
  currentCategory1: number;

  catalog: ICatalog[];
  submenuList: ISubmenuList[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customUrlSerializer: MyUrlSerializer,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {
    this.catalog = this.appComponent.catalog;
    console.log('url', this.router.url);
    this.route.params.subscribe(params => {
      this.category0 = params.category0;
      this.category1 = params.category1;

      this.catalog.forEach((value) => {
        if (params.category0 === value.category0) {
          this.submenuList = value.category0.category1;
        }
      });
    });
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
  // }
  //
  // setClasses() {
  //   const classes = {clicked: this.prop1, b: this.prop2};
  //   return classes;
  // }
}

