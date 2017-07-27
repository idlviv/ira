import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products-section',
  templateUrl: 'products-section.component.html',
  styleUrls: ['products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {

  constructor(private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => console.log("section id parameter",params['id']));

  }

}
