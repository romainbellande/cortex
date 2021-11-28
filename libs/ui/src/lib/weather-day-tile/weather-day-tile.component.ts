import { Component, Input, OnInit } from '@angular/core';
import { oawUtils } from '@cortex/browser-toolkit';
import { format } from 'date-fns';
import { DayTileConfig } from './day-tile-config.interface';

@Component({
  selector: 'cortex-weather-day-tile',
  templateUrl: './weather-day-tile.component.html',
  styleUrls: ['./weather-day-tile.component.scss']
})
export class WeatherDayTileComponent implements OnInit {
  @Input()
  config!: DayTileConfig;

  iconURL = '';

  day = '';

  ngOnInit() {
    this.iconURL = oawUtils.getIconURL(this.config.icon);
    this.day = format(this.config.datetime, 'iii');
  }
}
