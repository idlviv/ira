import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { URLSearchParams, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import {AuthService} from './auth.service';
import {config} from '../app.config';


import {IProduct} from '../interfaces/i-product';

@Injectable()
export class ProductService {

  constructor(private http: Http,
              private authService: AuthService) { }

  getCatalog() {
      return this.http.get(
        config.serverUrl + 'api/getCatalog')
        .map(res => res.json());
  }

  getProducts() {
      return this.http.get(
        config.serverUrl + 'api/getProducts')
        .map(res => res.json());
  }

  getDistinctCategories(searchQuery) {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');

    let params = new URLSearchParams();
    params.set('str', searchQuery);

    let options = new RequestOptions({ headers: headers, params: params });
      return this.http.get(
        config.serverUrl + 'api/getDistinctCategories',
        options)
        .map(res => res.json());
  }

  getDistinctProducts(searchQuery) {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');

    let params = new URLSearchParams();
    params.set('str', searchQuery);

    let options = new RequestOptions({ headers: headers, params: params });
      return this.http.get(
        config.serverUrl + 'api/getDistinctProducts',
        options)
        .map(res => res.json());
  }

  getQueriedProducts(searchQuery) {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');

    let params = new URLSearchParams();
    // params.set('category', 'Toys');
    params.set('obj', JSON.stringify(searchQuery));

    let options = new RequestOptions({ headers: headers, params: params });
      return this.http.get(
        config.serverUrl + 'api/getQueriedProducts',
        options)
        .map(res => res.json());
  }

  addProduct(product) {

    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);

    headers.append('Content-Type', 'application/json');
    return this.http.post(
      config.serverUrl + 'api/addProduct',
      product,
      {headers: headers})
      .map(res => res.json())
  }

  editProduct(product) {

    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);

    headers.append('Content-Type', 'application/json');
    return this.http.put(
      config.serverUrl + 'api/editProduct',
      product,
      {headers: headers})
      .map(res => res.json())
  }

  deleteProduct(_id) {

    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    console.log('api/deleteProduct/'+ _id);
    return this.http.delete(
      config.serverUrl + 'api/deleteProduct/'+ _id,
      {headers: headers})
      .map(res => res.json())
  }

}
