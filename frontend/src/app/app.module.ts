import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { LoginComponent } from './components/users-management/login/login.component';
// import { RegisterComponent } from './components/users-management/register/register.component';
import { HomeComponent } from './components/home/home.component';
// import { DashboardComponent } from './components/users-management/dashboard/dashboard.component';
// import { ProfileComponent } from './components/users-management/profile/profile.component';
import { AddProductComponent } from './components/products-management/add-product/add-product.component';
import { ProductsManagementComponent } from './components/products-management/products-management.component';
import { EditProductComponent } from './components/products-management/edit-product/edit-product.component';

// import {ValidateService} from './services/validate.service';
// import {AuthService} from './services/auth.service';
import {ProductService} from './services/product.service';
// import {AuthGuard} from './guards/auth.guard';
import { AppRoutingModule } from './app-routing.module';
// import { HomeRoutingModule } from './components/home/home-routing.module';

import {FlashMessagesModule} from 'angular2-flash-messages';
import { SideMenuComponent } from './components/home/side-menu/side-menu.component';
// import { HomeSectionComponent } from './components/home/home-section/home-section.component';
// import { ProductsComponent } from './components/products/products.component';
import {ProductsModule} from './components/products/products.module';
import {HomeModule} from './components/home/home.module';
import {SharedModule} from './components/shared/shared.module';
import {UsersManagementModule} from './components/users-management/users-management.module';
import {ProductsManagementModule} from './components/products-management/products-management.module';
// import { ProductsSectionComponent } from './components/products-section/products-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // LoginComponent,
    // RegisterComponent,
    // HomeComponent,
    // DashboardComponent,
    // ProfileComponent,
    // ItemComponent,
    // AddProductComponent,
    // ProductsManagementComponent,
    // Page404Component,
    // EditProductComponent,
    // SideMenuComponent,
    // HomeSectionComponent,
    // ProductsSectionComponent,
    // ProductsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    // FormsModule,
    HttpModule,
    ProductsModule,
    ProductsManagementModule,
    HomeModule,
    SharedModule,
    UsersManagementModule,
    AppRoutingModule,
    FlashMessagesModule,
  ],
  exports: [
    // HomeModule,
    SharedModule,
    // FormsModule,

    // ProductsModule,
  ],
  providers: [
    // ValidateService,
    // AuthService,
    // AuthGuard,
    // ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
