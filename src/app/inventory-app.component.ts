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
    <hr />
    <demo-form-sku></demo-form-sku>
  </div>
  `
})

export class InventoryApp {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'AMBROXOL HCL',
        'Ambroxol',
        '/resources/images/products/ambroxol.jpg',
        ['Mucolytic'],
        21.00
      ),
      new Product(
        'MEFENAMIC',
        'Mefenamic Acid',
        '/resources/images/products/mefenamic.jpg',
        ['Non-steroidal', 'Anti-inflammatory'],
        45.00
      ),
      new Product(
        'CEFALEXIN',
        'Zelexin',
        '/resources/images/products/zelexin.jpg',
        ['Antibacterial'],
        114.00
      )];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }

}
