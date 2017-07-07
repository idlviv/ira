import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AuthService} from './auth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http: Http,
              private authService: AuthService) { }

  getProducts() {
    return this.http.get(
      'api/getProducts')
      .map(res => res.json());
  }

  addProduct(product) {

    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);

    headers.append('Content-Type', 'application/json');
    return this.http.post(
      'api/addProduct',
      product,
      {headers: headers})
      .map(res => res.json());
  }

}
