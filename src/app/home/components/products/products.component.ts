import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductListItem } from '../../../shared/products.type';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers:[ProductsService]
})
export class ProductsComponent {
  products:ProductListItem[] = [];

  constructor(private productService:ProductsService){
    this.products = this.productService.getProductsList();
  }




}
