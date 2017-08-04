import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import {ProductsRoutingModule} from "./products-routing.module";
import {ProductsSectionComponent} from "./products-section/products-section.component";
import { ProductsSideMenuComponent } from './products-side-menu/products-side-menu.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import {HomeModule} from "../home/home.module";
import { ProductsSubmenuComponent } from './products-submenu/products-submenu.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HomeModule
  ],
  declarations: [
    ProductsComponent,
    ProductsSectionComponent,
    ProductsSideMenuComponent,
    ProductsListComponent,
    ProductsDetailComponent,
    ProductsSubmenuComponent,
  ]
})
export class ProductsModule { }
