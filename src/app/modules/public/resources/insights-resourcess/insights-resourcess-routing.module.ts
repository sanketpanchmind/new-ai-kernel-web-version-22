import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightsResourcessComponent } from './insights-resourcess.component';

const routes: Routes = [{ path: '', component: InsightsResourcessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightsResourcessRoutingModule { }
