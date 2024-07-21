import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetailsComponent } from './retails.component';

const routes: Routes = [{ path: '', component: RetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailsRoutingModule { }
