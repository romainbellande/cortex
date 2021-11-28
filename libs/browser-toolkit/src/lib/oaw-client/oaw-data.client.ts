import { OneCallPayload, OneCallResponse } from "./interfaces";
import { OAWClientBase } from "./oaw.client-base";

export class OAWDataClient extends OAWClientBase {
  constructor(appid: string) {
    super({ appid, endpoint: '/data/2.5'});
  }

  getOneCall(payload: OneCallPayload) {
    const { latitude, longitude, exclude, units, lang } = payload;
    const params = this.createParams();
    params.set('lat', latitude.toString());
    params.set('lon', longitude.toString());

    if (exclude) {
      const formattedExclude: string = exclude.join(',');
      params.set('exclude', formattedExclude);
    }

    if (units) {
      params.set('units', units);
    }

    if (lang) {
      params.set('lang', lang);
    }

    return this.client.get<OneCallResponse>(`/onecall?${params.toString()}`);
  }

  getHourlyForecast(payload: OneCallPayload) {
    const { latitude, longitude, exclude, units, lang } = payload;
    const params = this.createParams();
    params.set('lat', latitude.toString());
    params.set('lon', longitude.toString());

    if (exclude) {
      const formattedExclude: string = exclude.join(',');
      params.set('exclude', formattedExclude);
    }

    if (units) {
      params.set('units', units);
    }

    if (lang) {
      params.set('lang', lang);
    }

    return this.client.get<OneCallResponse>(`/forecast/hourly?${params.toString()}`);
  }
}
