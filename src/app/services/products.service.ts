import { Injectable } from '@angular/core';
import { ProductListItem } from '../shared/products.type';
import { products } from '../sampleData/products.data';


@Injectable()
export class ProductsService {
  getProductsList(): ProductListItem[] {
    return products;
  }
}

