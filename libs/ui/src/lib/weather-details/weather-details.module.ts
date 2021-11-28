import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDetailsComponent } from './weather-details.component';
import { WeatherTemperaturesModule } from '../weather-temperatures/weather-temperatures.module';
import { WeatherDayTileModule } from '../weather-day-tile/weather-day-tile.module';

@NgModule({
  declarations: [
    WeatherDetailsComponent
  ],
  imports: [
    CommonModule,
    WeatherTemperaturesModule,
    WeatherDayTileModule,
  ],
  exports: [WeatherDetailsComponent]
})
export class WeatherDetailsModule { }
