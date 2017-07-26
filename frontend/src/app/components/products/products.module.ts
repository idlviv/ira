import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import {ProductsRoutingModule} from "./products-routing.module";
import {ProductsSectionComponent} from "./products-section/products-section.component";
import { ProductsSideMenuComponent } from './products-side-menu/products-side-menu.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductsSectionComponent,
    ProductsSideMenuComponent,
  ]
})
export class ProductsModule { }
