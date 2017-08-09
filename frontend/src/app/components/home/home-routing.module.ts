import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { HomeSectionComponent } from './home-section/home-section.component';
import {SideMenuComponent} from "./side-menu/side-menu.component";
import {HomeComponent} from "./home.component";

const homeRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeSectionComponent
      },
      // {
      //   path: ':id',
      //   component: SolodkoComponent
      // },
      {
        path: '',
        outlet: 'sidemenu',
        component: SideMenuComponent
      },
      {
        path: ':id',
        outlet: 'sidemenu',
        component: SideMenuComponent
      },
      {
        path: ':**',
        outlet: 'sidemenu',
        component: SideMenuComponent
      }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      homeRoutes
    )],
  exports: [RouterModule]
})

export class HomeRoutingModule{}

