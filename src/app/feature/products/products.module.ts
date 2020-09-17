import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductChildComponent } from './product-child/product-child.component';
import { ProductSubComponent } from './product-sub/product-sub.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductChildComponent,
    ProductSubComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
