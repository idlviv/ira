import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ICatalog} from '../interfaces/i-catalog';
import {Observable} from 'rxjs/Observable';
import {ProductService} from './product.service';

@Injectable()
export class CatalogResolverService implements Resolve<ICatalog> {
  catalog: ICatalog[];

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ICatalog> {

    return this.productService.getCatalog();
    // .subscribe(
    //   (products) => {
    //     this.products = products;
    //   },
    //   (error) => {
    //     this.flashMessage.show(
    //       error,
    //       {
    //         cssClass: 'alert-danger',
    //         timeout: 3000
    //       });
    //     return false;
    //   });
  }
}

