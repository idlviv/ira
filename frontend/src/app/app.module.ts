import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {MdTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import{ValidateService} from './services/validate.service';
import{AuthService} from './services/auth.service';
import{ProductService} from './services/product.service';
import{FlashMessagesModule} from 'angular2-flash-messages';
import{AuthGuard} from './guards/auth.guard';
import { ItemComponent } from './components/item/item.component';
import { AddProductComponent } from './components/products-management/add-product/add-product.component';
import { ProductsManagementComponent } from './components/products-management/products-management.component';
import { Page404Component } from './components/page404/page404.component';
import { EditProductComponent } from './components/products-management/edit-product/edit-product.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'product-management', component: ProductsManagementComponent, canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: '**', component: Page404Component},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ItemComponent,
    AddProductComponent,
    ProductsManagementComponent,
    Page404Component,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    MdTabsModule,
    BrowserAnimationsModule
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
