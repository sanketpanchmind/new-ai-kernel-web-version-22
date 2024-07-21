import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersCulturessComponent } from './careers-culturess.component';

const routes: Routes = [{ path: '', component: CareersCulturessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersCulturessRoutingModule { }
