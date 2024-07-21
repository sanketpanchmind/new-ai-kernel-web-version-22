import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartcityRoutingModule } from './smartcity-routing.module';
import { SmartcityComponent } from './smartcity.component';


@NgModule({
  declarations: [
    SmartcityComponent
  ],
  imports: [
    CommonModule,
    SmartcityRoutingModule
  ]
})
export class SmartcityModule { }
