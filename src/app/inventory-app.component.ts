import {Component} from '@angular/core';
import {Product} from "./product/product.model";

@Component({
  selector: 'inventory-app',
  template: `
  <div class="inventory-app">
    <products-list 
      [productList]="products"
      (onProductSelected)="productWasSelected($event)">
    </products-list>
  </div>
  `
})

export class InventoryApp {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99
      ),
      new Product(
        'NEATJACKET',
        'Blue Jacket',
        '/resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jacket and Vests'],
        238.99
      ),
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99
      )];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }

}
