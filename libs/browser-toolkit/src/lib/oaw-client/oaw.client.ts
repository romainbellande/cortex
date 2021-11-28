import { OAWGeocodingClient } from "./oaw-geocoding.client";
import { OAWDataClient } from './oaw-data.client';
export class OAWClient {
  geocoding: OAWGeocodingClient;
  data: OAWDataClient;

  constructor(appid: string) {
    this.geocoding = new OAWGeocodingClient(appid);
    this.data = new OAWDataClient(appid);
  }
}
