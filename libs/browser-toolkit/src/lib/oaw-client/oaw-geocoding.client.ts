import { OAWClient } from "./oaw.client";

export interface OAWDirectPayload {
  city: string;
  stateCode?: string;
  countryCode?: string;
  limit?: number;
}

export interface OAWDirectResponseItem {
  name: string;
  local_names: Record<string, string>;
  lat: string;
  lon: string;
  country: string;
}

export class OAWGeocodingClient extends OAWClient {
  constructor(appid: string) {
    super({ appid, endpoint: '/geo/1.0'});
  }

  getDirect({ city, stateCode, countryCode, limit }: OAWDirectPayload) {
    const params = this.createParams()
    params.set('q', `${city},${stateCode || ''},${countryCode || ''}`);

    if (limit) {
      params.set('limit', limit.toString());
    }

    return this.client.get(`/direct?${params.toString()}`)
  }
}
