import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { SolodkoComponent } from '../categories/solodko/solodko.component';
import { ToysComponent } from '../categories/toys/toys.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import {SideMenuComponent} from "../menu/side-menu/side-menu.component";
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
      {
        path: '',
        outlet: 'sidemenu',
        component: SideMenuComponent
      },
      // {
      //   path: ':id',
      //   component: CoursesCategoryComponent
      // },
      {
        path: 'solodko',
        component: SolodkoComponent
      },
      {
        path: 'toys',
        component: ToysComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})

export class HomeRouter{}

