import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {MatIconModule} from '@angular/material/icon';

import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
