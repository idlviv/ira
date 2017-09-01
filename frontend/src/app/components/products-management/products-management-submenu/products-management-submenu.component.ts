import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {productsManagementSubmenuList} from '../../../data/products-mamagement-submenu-list';

@Component({
  selector: 'app-products-management-submenu',
  templateUrl: './products-management-submenu.component.html',
  styleUrls: ['./products-management-submenu.component.css']
})
export class ProductsManagementSubmenuComponent implements OnInit {

  list: string[] = productsManagementSubmenuList;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log(this.list);
    this.route.params
        .subscribe(params => {

        });
  }

}
