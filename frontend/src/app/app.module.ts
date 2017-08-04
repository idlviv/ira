import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { ItemComponent } from './components/item/item.component';
import { AddProductComponent } from './components/products-management/add-product/add-product.component';
import { ProductsManagementComponent } from './components/products-management/products-management.component';
import { Page404Component } from './components/page404/page404.component';
import { EditProductComponent } from './components/products-management/edit-product/edit-product.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {ProductService} from './services/product.service';
import {AuthGuard} from './guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { HomeRoutingModule } from './components/home/home-routing.module';

import{FlashMessagesModule} from 'angular2-flash-messages';
import { SideMenuComponent } from './components/menu/side-menu/side-menu.component';
import { SolodkoComponent } from './components/categories/solodko/solodko.component';
import { ToysComponent } from './components/categories/toys/toys.component';
import { HomeSectionComponent } from './components/home/home-section/home-section.component';
// import { ProductsComponent } from './components/products/products.component';
import {ProductsModule} from "./components/products/products.module";
import {HomeModule} from "./components/home/home.module";
// import { ProductsSectionComponent } from './components/products-section/products-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    // ItemComponent,
    AddProductComponent,
    ProductsManagementComponent,
    // Page404Component,
    EditProductComponent,
    SideMenuComponent,
    SolodkoComponent,
    ToysComponent,
    HomeSectionComponent,
    // ProductsSectionComponent,
    // ProductsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductsModule,
    HomeRoutingModule,
    HomeModule,
    AppRoutingModule,
    FlashMessagesModule,
  ],
  exports:[
    HomeModule,
    // ProductsModule,
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
