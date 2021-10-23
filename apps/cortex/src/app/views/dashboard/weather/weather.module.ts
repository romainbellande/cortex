import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { UiModule } from '@cortex/ui';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    UiModule,
    HttpClientModule
  ]
})
export class WeatherModule { }
