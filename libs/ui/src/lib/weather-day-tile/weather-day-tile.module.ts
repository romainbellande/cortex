import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDayTileComponent } from './weather-day-tile.component';



@NgModule({
  declarations: [
    WeatherDayTileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [WeatherDayTileComponent]
})
export class WeatherDayTileModule { }
