import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-solodko',
  templateUrl: './solodko.component.html',
  styleUrls: ['./solodko.component.css']
})
export class SolodkoComponent implements OnInit {

  constructor(route: ActivatedRoute) {

    route.params.subscribe(params => console.log("solodko id parameter",params['id']));

  }

  ngOnInit() {
  }

}
