import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherTemperaturesComponent } from './weather-temperatures.component';
import { NgChartsModule } from 'ng2-charts';
export * from './interfaces';

@NgModule({
  declarations: [
    WeatherTemperaturesComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [WeatherTemperaturesComponent]
})
export class WeatherTemperaturesModule { }
