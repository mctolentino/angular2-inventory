import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InventoryApp} from './inventory-app.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductRowComponent} from './product-row/product-row.component';
import {ProductImageComponent} from './product-image/product-image.component';
import {ProductDepartmentComponent} from './product-department/product-department.component';
import {ProductDisplayComponent} from './product-display/product-display.component';
import {DemoFormSku} from "./forms/demo-form-sku";

@NgModule({
  declarations: [
    InventoryApp,
    ProductsListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    ProductDisplayComponent,
    DemoFormSku
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InventoryApp]
})
export class InventoryAppModule {
}
