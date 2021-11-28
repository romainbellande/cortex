import { OAWClientBase } from "./oaw.client-base";

export interface OAWCommonPayload {
  limit?: number;
}

export interface OAWDirectPayload extends OAWCommonPayload {
  city: string;
  stateCode?: string;
  countryCode?: string;
}

export interface OAWGeocodingResponseItem {
  name: string;
  local_names: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
}

export interface OAWReversePayload extends OAWCommonPayload  {
  lat: number;
  lon: number;
  limit?: number;
}

export class OAWGeocodingClient extends OAWClientBase {
  constructor(appid: string) {
    super({ appid, endpoint: '/geo/1.0'});
  }

  getDirect({ city, stateCode, countryCode, limit }: OAWDirectPayload) {
    const params = this.createParams()
    params.set('q', `${city},${stateCode || ''},${countryCode || ''}`);

    if (limit) {
      params.set('limit', limit.toString());
    }

    return this.client.get<OAWGeocodingResponseItem[]>(`/direct?${params.toString()}`)
  }

  getReverse({ lat, lon, limit }: OAWReversePayload) {
    const params = this.createParams();

    params.set('lat', lat.toString());
    params.set('lon', lon.toString());

    if (limit) {
      params.set('limit', limit.toString());
    }

    return this.client.get<OAWGeocodingResponseItem[]>(`/reverse?${params.toString()}`)
  }
}
