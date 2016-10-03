import {Component} from '@angular/core';
import {Product} from "../product/product.model";

@Component({
  selector: 'product-department',
  inputs: ['product'],
  templateUrl: './product-department.component.html'
})
export class ProductDepartmentComponent {
  product: Product;
}
