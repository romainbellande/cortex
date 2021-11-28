import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { debounce } from 'lodash';
import coutries from 'iso-3166-1';
import { Country } from 'iso-3166-1/dist/iso-3166';
import { getCurrentPosition, OneCallResponse, OAWClient } from '@cortex/browser-toolkit';
import { environment } from '@cortex/client/environments/environment';
import { Map } from 'mapbox-gl';
import { Coordinates } from '@cortex/browser-toolkit';

interface City {
  name: string;
  lat: number;
  lon: number;
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
export class WeatherComponent implements AfterViewInit {
  cities: City[] = [];
  countries: Country[] = coutries.all();
  currentCoordinates?: Coordinates;
  currentCountryCode?: string;
  oawClient = new OAWClient(environment.opemweathermap.appid);
  map?: Map;
  currentWeather?: OneCallResponse;
  currentCity = '';
  hourlyForecast: any = null;

  constructor(private http: HttpClient) {}

  fetchCity = debounce(async (city: string) => {
    console.log(`city`, city)
    const { data } = await this.oawClient.geocoding.getDirect({
      city
    });

    if (Array.isArray(data)) {
      this.cities = data.map(({ name, lat, lon, country }) => ({
        name,
        lat,
        lon,
        country
      }));
    }

  }, 500);

  async ngAfterViewInit() {
    try {
      const position = await getCurrentPosition({
        enableHighAccuracy: true
      });
      console.log('position :>> ', position);
      const { coords: { latitude, longitude } } = position;

      this.currentCoordinates = {
        latitude,
        longitude,
      }

      const { data } = await this.oawClient.geocoding.getReverse({ lat: latitude, lon: longitude });

      this.currentCity = data[0].name;

      this.currentCountryCode = data[0].country;

      const oneCallResponse = await this.oawClient.data.getOneCall({
        latitude,
        longitude,
        units: 'metric',
        exclude: ['minutely']
      });

      this.currentWeather = oneCallResponse.data;

      console.log('response.data :>> ', this.currentWeather)
    } catch (error) {
      console.error(error.message);
    }
  }

  onCityChange(event: Event) {
    const { value } = event.target as HTMLInputElement;

    this.fetchCity(value);
  }

  async onCitySelect({ name, lat, lon }: City) {
    this.currentCity = name;
    const { data } = await this.oawClient.data.getOneCall({
      latitude: lat,
      longitude: lon,
      units: 'metric',
      exclude: ['minutely']
    });
    this.currentWeather = data;
  }

  onMapInitialized(map: Map) {
    console.log('map :>> ', map);
    this.map = map;
  }

  getMap(): Promise<Map> {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (this.map) {
          resolve(this.map);
          clearInterval(interval);
        }
      }, 200)
    });
  }
}
