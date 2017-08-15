import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {ProductsComponent} from './products.component';
import {ProductsSectionComponent} from './products-section/products-section.component';
import {ProductsSideMenuComponent} from './products-side-menu/products-side-menu.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {Page404Component} from '../shared/page404/page404.component';
import {ProductsSubmenuComponent} from './products-submenu/products-submenu.component';
import {ResolverService} from '../../services/product-resolver.service';

const productsRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'start/:category0/:category1',
        component: ProductsListComponent,
        resolve: {products: ResolverService}
      },
      {
        path: 'category/:category0/:category1',
        component: ProductsSectionComponent,
        resolve: {products: ResolverService}
      },
      {
        path: 'category/:category0/:category1',
        outlet: 'productsSubmenu',
        component: ProductsSubmenuComponent,
      },
      // {
      //   path: ':category0',
      //   component: ProductsListComponent,
      // },
      // {
      //   path: ':category0',
      //   outlet: 'productsSubmenu',
      //   component: ProductsSideMenuComponent,
      // },
      // {
      //   path: ':category0/:category1',
      //   component: ProductsListComponent
      // },
      // {
      //   path: ':category0/:category1',
      //   outlet: 'productsSubmenu',
      //   component: ProductsSideMenuComponent
      // },
      {
        path: '**',
        component: Page404Component
      },

    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      productsRoutes
    )],
  exports: [RouterModule]
})

export class ProductsRoutingModule{}


