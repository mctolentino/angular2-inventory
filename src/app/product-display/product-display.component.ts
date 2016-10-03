import {Component} from '@angular/core';

@Component({
  selector: 'product-display',
  inputs: ['price'],
  templateUrl: './product-display.component.html'
})
export class ProductDisplayComponent {
  price: number;
}
