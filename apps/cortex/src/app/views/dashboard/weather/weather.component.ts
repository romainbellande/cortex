import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { debounce } from 'lodash';

interface City {
  name: string;
  lat: string;
  lon: string;
  country: string;
}

@Component({
  selector: 'cortex-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'flex flex-col flex-auto'
  }
})
export class WeatherComponent {
  cities: City[] = [];
  constructor(private http: HttpClient) {}

  fetchCity = debounce(async (city: string) => {
    console.log(`city`, city)
    this.cities = await this.http.get<City[]>(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=898a9a5cced63fe4d8473b019e24cbf1`).toPromise();
  }, 500);

  onCityChange(event: Event) {
    const { value } = event.target as HTMLInputElement;

    this.fetchCity(value);
  }
}
