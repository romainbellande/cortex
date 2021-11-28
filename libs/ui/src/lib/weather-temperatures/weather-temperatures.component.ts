import { Component, Input } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { HourlyTemperatures } from './interfaces';


@Component({
  selector: 'cortex-weather-temperatures',
  templateUrl: './weather-temperatures.component.html',
  styleUrls: ['./weather-temperatures.component.scss']
})
export class WeatherTemperaturesComponent {
  @Input()
  data!: HourlyTemperatures;

  public lineChartData: ChartData =
    {
      labels: [],
      datasets: [{
        fill: true,
        data:[],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4
      }]
    };
  public lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,

  };

  getData(): ChartData {
    return {
      labels: this.data.labels,
      datasets: [{
        fill: true,
        data: this.data.data,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4
      }]
    };
  }
}
