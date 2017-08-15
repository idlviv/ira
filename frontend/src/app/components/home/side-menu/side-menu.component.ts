import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) {

    route.params.subscribe(params => console.log("side menu id parameter",params['id']));

  }

  navigate(path) {
    console.log('path', path);
    console.log('this route ', this.route );
    this.router.navigate([{outlets: {primary: path, sidemenu: path}}],
      {relativeTo: this.route}
      );
  }

  ngOnInit() {
  }

}
