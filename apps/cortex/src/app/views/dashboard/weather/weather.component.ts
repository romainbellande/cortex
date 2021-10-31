import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { debounce } from 'lodash';
import coutries from 'iso-3166-1';
import { Country } from 'iso-3166-1/dist/iso-3166';
import { getCurrentPosition, OAWGeocodingClient, OAWDirectResponseItem } from '@cortex/browser-toolkit';
import { environment } from '@cortex/client/environments/environment';

interface Coordinates {
  latitude: number;
  longitude: number;
}

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
export class WeatherComponent implements AfterViewInit {
  cities: City[] = [];
  countries: Country[] = coutries.all();
  currentCoordinates?: Coordinates;
  oawGeocodingClient = new OAWGeocodingClient(environment.opemweathermap.appid);

  constructor(private http: HttpClient) {}

  fetchCity = debounce(async (city: string) => {
    console.log(`city`, city)
    const response = await this.oawGeocodingClient.getDirect({
      city
    });

    console.log('response :>> ', response);
    const { data } = response;

    console.log('data :>> ', data, Array.isArray(data), typeof data);

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
      const position = await getCurrentPosition();
      console.log('position :>> ', position);
      const { coords: { latitude, longitude } } = position;
      this.currentCoordinates = {
        latitude,
        longitude,
      }
      console.log('currentCoordinates :>> ', this.currentCoordinates);
    } catch (error) {
      console.error(error.message);
    }
  }

  onCityChange(event: Event) {
    const { value } = event.target as HTMLInputElement;

    this.fetchCity(value);
  }
}
