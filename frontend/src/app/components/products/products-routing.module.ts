import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {ProductsComponent} from "./products.component";
import {ProductsSectionComponent} from "./products-section/products-section.component";
import {ProductsSideMenuComponent} from "./products-side-menu/products-side-menu.component";
import {ProductsListComponent} from "./products-list/products-list.component";

const productsRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsSectionComponent
      },
      {
        path: ':id',
        component: ProductsListComponent
      },
      {
        path: '',
        outlet: 'productsSideMenu',
        component: ProductsSideMenuComponent
      },
      {
        path: ':id',
        outlet: 'productsSideMenu',
        component: ProductsSideMenuComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      productsRoutes
    )],
  exports: [RouterModule]
})

export class ProductsRoutingModule{}


