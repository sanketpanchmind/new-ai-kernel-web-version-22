import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicSectoryRoutingModule } from './public-sectory-routing.module';
import { PublicSectoryComponent } from './public-sectory.component';


@NgModule({
  declarations: [
    PublicSectoryComponent
  ],
  imports: [
    CommonModule,
    PublicSectoryRoutingModule
  ]
})
export class PublicSectoryModule { }
