import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { MapModule } from '@cortex/ui';
import { HttpClientModule } from '@angular/common/http';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { environment } from '@cortex/client/environments/environment';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MapModule.forRoot({
      accessToken: environment.map.accessToken
    }),
    HttpClientModule,
    NgSelectModule,
    FormsModule
  ]
})
export class WeatherModule { }
