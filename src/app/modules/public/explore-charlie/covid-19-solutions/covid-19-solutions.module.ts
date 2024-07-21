import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Covid19SolutionsRoutingModule } from './covid-19-solutions-routing.module';
import { Covid19SolutionsComponent } from './covid-19-solutions.component';


@NgModule({
  declarations: [
    Covid19SolutionsComponent
  ],
  imports: [
    CommonModule,
    Covid19SolutionsRoutingModule
  ]
})
export class Covid19SolutionsModule { }
