import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturingsRoutingModule } from './manufacturings-routing.module';
import { ManufacturingsComponent } from './manufacturings.component';


@NgModule({
  declarations: [
    ManufacturingsComponent
  ],
  imports: [
    CommonModule,
    ManufacturingsRoutingModule
  ]
})
export class ManufacturingsModule { }
