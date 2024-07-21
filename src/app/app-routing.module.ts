import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './layouts/public/public.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'ref', component: ReferanceComponent },// For Testing purpose
  { path: '', component: PublicComponent, loadChildren: () => import('./layouts/public/public.module').then(m => m.PublicModule) },
  { path: 'success-stories', loadChildren: () => import('./modules/public/success-stories/success-stories.module').then(m => m.SuccessStoriesModule) },
  { path: 'about-us', loadChildren: () => import('./modules/public/company/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'what-is-charlie', loadChildren: () => import('./modules/public/explore-charlie/what-is-charlie/what-is-charlie.module').then(m => m.WhatIsCharlieModule) },
  { path: 'covid-19-solutions', loadChildren: () => import('./modules/public/explore-charlie/covid-19-solutions/covid-19-solutions.module').then(m => m.Covid19SolutionsModule) },
  { path: 'publications', loadChildren: () => import('./modules/public/resources/publications/publications.module').then(m => m.PublicationsModule) },
  { path: 'careers-culturess', loadChildren: () => import('./modules/public/company/careers-culturess/careers-culturess.module').then(m => m.CareersCulturessModule) },
  { path: 'insights-resources', loadChildren: () => import('./modules/public/resources/insights-resourcess/insights-resourcess.module').then(m => m.InsightsResourcessModule) },
  { path: 'retail', loadChildren: () => import('./modules/public/industries-we-serve/retails/retails.module').then(m => m.RetailsModule) },
  { path: 'manufacturingl', loadChildren: () => import('./modules/public/industries-we-serve/manufacturings/manufacturings.module').then(m => m.ManufacturingsModule) },
  { path: 'infrastructure', loadChildren: () => import('./modules/public/industries-we-serve/infrastructure/infrastructure.module').then(m => m.InfrastructureModule) },
  { path: 'hospitality', loadChildren: () => import('./modules/public/industries-we-serve/hospitality/hospitality.module').then(m => m.HospitalityModule) },
  { path: 'smartcity', loadChildren: () => import('./modules/public/industries-we-serve/smartcity/smartcity.module').then(m => m.SmartcityModule) },
  { path: 'public-sectory', loadChildren: () => import('./modules/public/industries-we-serve/public-sectory/public-sectory.module').then(m => m.PublicSectoryModule) },
 

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
