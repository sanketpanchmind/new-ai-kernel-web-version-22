import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturingsComponent } from './manufacturings.component';

const routes: Routes = [{ path: '', component: ManufacturingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturingsRoutingModule { }
