import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { RegionComponent } from './pages/region/region.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';



@NgModule({
  declarations: [
    CapitalComponent,
    RegionComponent,
    ByCountryComponent,
    ViewCountryComponent
  ],
  exports: [
    CapitalComponent,
    RegionComponent,
    ByCountryComponent,
    ViewCountryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountryModule { }
