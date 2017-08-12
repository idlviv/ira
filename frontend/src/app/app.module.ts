import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';

import {FlashMessagesModule} from 'angular2-flash-messages';

import {ProductsModule} from './components/products/products.module';
import {HomeModule} from './components/home/home.module';
import {SharedModule} from './components/shared/shared.module';
import {UsersManagementModule} from './components/users-management/users-management.module';
import {ProductsManagementModule} from './components/products-management/products-management.module';
import {MyUrlSerializer} from './services/url-serializer.service';
import {ResolverService} from './services/product.resolver';

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
    MyUrlSerializer,
    ResolverService
    // ValidateService,
    // AuthService,
    // AuthGuard,
    // ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
