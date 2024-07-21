import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersCulturessRoutingModule } from './careers-culturess-routing.module';
import { CareersCulturessComponent } from './careers-culturess.component';


@NgModule({
  declarations: [
    CareersCulturessComponent
  ],
  imports: [
    CommonModule,
    CareersCulturessRoutingModule
  ]
})
export class CareersCulturessModule { }
