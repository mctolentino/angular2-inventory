import { Component, OnInit } from '@angular/core';
import {Product} from "../product/product.model";

@Component({
  selector: 'product-image',
  host: {class: 'ui small image'},
  inputs: ['product'],
  template: `
  <img class="product-image" [src]="product.imageUrl">
  `
})
export class ProductImageComponent {
  product: Product;
}
