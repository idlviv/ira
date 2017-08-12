import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IProduct} from '../interfaces/i-product';
import {Observable} from 'rxjs/Observable';
import {ProductService} from './product.service';

@Injectable()
export class ResolverService implements Resolve<IProduct> {
searchQuery: object;
products: IProduct[];

constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IProduct> {
    const category0 = route.params.category0;
    const category1 = route.params.category1;

    this.searchQuery = {
      'catalog.category0': category0,
      'catalog.category1': category1 === 'main' ? {$exists: true} : category1,
    };
    return this.productService.getQueriedProducts(this.searchQuery);
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

