import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealershipRoutingModule } from './dealership-routing.module';
import { DealershipComponent } from './dealership.component';


@NgModule({
  declarations: [DealershipComponent],
  imports: [
    CommonModule,
    DealershipRoutingModule
  ]
})
export class DealershipModule { }
