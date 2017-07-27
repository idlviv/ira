import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products-side-menu',
  templateUrl: './products-side-menu.component.html',
  styleUrls: ['./products-side-menu.component.css']
})
export class ProductsSideMenuComponent implements OnInit {
  urlSnapShot: any;
  constructor(private router: Router,
              private route: ActivatedRoute) {


  }

  navigate(path) {
    console.log('path', path);
    console.log('this route ', this.route );
    this.router.navigate([{outlets: {primary: path, productsSideMenu: path}}],
      {relativeTo: this.route}
    );
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.urlSnapShot = this.route;
      console.log("products side menu id parameter",params['cat'],' ',params['subCat']);
    });
  }

}
