import {Component, EventEmitter} from '@angular/core';
import {Product} from "../product/product.model";

@Component({
  selector: 'products-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  productList: Product[];
  onProductSelected: EventEmitter<Product>;
  currentProduct: Product;

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

}
