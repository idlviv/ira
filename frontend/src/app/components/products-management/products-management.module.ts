import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {ProductService} from '../../services/product.service';
import {ProductsManagementComponent} from './products-management.component';
import {AddProductComponent} from './add-product/add-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    ProductsManagementComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
  ],
  providers: [
    ProductService,
  ]
})
export class ProductsManagementModule {}
