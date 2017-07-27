import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => console.log("list id parameter",params['cat'],' ',params['subCat']));
  }

}
