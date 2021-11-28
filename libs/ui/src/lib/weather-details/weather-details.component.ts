import { Component, Input, OnInit } from '@angular/core';
import { OneCallResponse, Temp } from '@cortex/browser-toolkit';
import { HourlyTemperatures } from '@cortex/ui';
import { format } from 'date-fns'
import { oawUtils } from '@cortex/browser-toolkit';
import { DayTileConfig } from '../weather-day-tile/day-tile-config.interface'

@Component({
  selector: 'cortex-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  @Input()
  data!: OneCallResponse;

  @Input()
  city!: string;

  getIconURL = oawUtils.getIconURL;

  selectedDay = 0;
  hourlyTemperatures?: HourlyTemperatures;

  ngOnInit() {
    this.hourlyTemperatures = this.getHourlyTemperatures();
  }

  formatDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return format(date, 'cccc ho');
  }

  getDays(): DayTileConfig[] {
    return this.data.daily.map(day => ({
      datetime: day.dt * 1000,
      icon: day.weather[0].icon,
      maxTemp: day.temp.max,
      minTemp: day.temp.min
    }));
  }


  getWindSpeedKmh(speed: number) {
    return Math.round(speed * 3.6);
  }

  getHourlyTemperatures(): HourlyTemperatures {
    if (this.selectedDay === 0) {
      const labels: string[] = this.data.hourly.map(hour => format(hour.dt * 1000, 'HH'));
      const data: number[] = this.data.hourly.map(hour => hour.temp);
      return {
        labels,
        data
      };
    } else {
      const labels: (keyof Temp)[] = ['morn', 'day', 'eve', 'night'];
      const { temp } = this.data.daily[this.selectedDay];
      const data: number[] = labels.map(label => temp[label]);
      return {
        labels,
        data
      };
    }
  }

  selectDay(index: number) {
    console.log('index :>> ', index);
    this.selectedDay = index;
  }
}
