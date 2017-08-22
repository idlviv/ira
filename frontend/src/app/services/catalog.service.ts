import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

// import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import {config} from '../app.config';

@Injectable()
export class CatalogService {

  constructor(private http: Http) {}

  getCatalog() {
    return this.http.get(
      config.serverUrl + 'api/getCatalog')
      .map(res => res.json());
  }

  getQueriedCatalog(params) {
    return this.http.get(
      config.serverUrl + 'api/getCatalog')
      .map(res => res.json())
      .map(data => {
        return data.find((value) => {
          console.log('cat serv - value', value);
          console.log('params.category0', params.category0);
          console.log('value.category0.name', value.category0.name);
          if (params.category0 === value.category0.name) {
            console.log('if');
            return value;
          }
        }).category0.category1;

          // for (let i = 0; i < data.category0.length; i++) {
          //   if (params.category0 === data[i].category0.name) {
          //     console.log('if');
          //     return data[i].category0.category1;
          //   }
          // }

      });
  }
}