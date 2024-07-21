import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailsRoutingModule } from './retails-routing.module';
import { RetailsComponent } from './retails.component';


@NgModule({
  declarations: [
    RetailsComponent
  ],
  imports: [
    CommonModule,
    RetailsRoutingModule
  ]
})
export class RetailsModule { }
