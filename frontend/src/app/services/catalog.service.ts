import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import {config} from '../app.config';

@Injectable()
export class CatalogService {
  // public globalVar = '';
  constructor(private http: Http) {}

  getCatalog() {
    return this.http.get(
      config.serverUrl + 'api/getCatalog')
      .map(res => res.json());
  }
}