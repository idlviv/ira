import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.css']
})
export class ProductsManagementComponent implements OnInit {
  // showAddProduct: Boolean = false;
  @Output() eventerManagementUpdateProducts = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onUpdateProducts() {
    this.eventerManagementUpdateProducts.emit();
    console.log('management - emit');
  }
}
