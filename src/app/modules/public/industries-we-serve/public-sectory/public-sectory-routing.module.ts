import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicSectoryComponent } from './public-sectory.component';

const routes: Routes = [{ path: '', component: PublicSectoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicSectoryRoutingModule { }
