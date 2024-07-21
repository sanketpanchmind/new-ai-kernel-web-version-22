import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightsResourcessRoutingModule } from './insights-resourcess-routing.module';
import { InsightsResourcessComponent } from './insights-resourcess.component';


@NgModule({
  declarations: [
    InsightsResourcessComponent
  ],
  imports: [
    CommonModule,
    InsightsResourcessRoutingModule
  ]
})
export class InsightsResourcessModule { }
