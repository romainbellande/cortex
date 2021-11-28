import axios, { AxiosInstance } from 'axios';

interface OAWClientConfig {
  appid: string;
  endpoint: string;
}

export abstract class OAWClientBase {
  protected appid: string;
  protected baseURL = 'https://api.openweathermap.org';
  protected client: AxiosInstance;

  constructor({ appid, endpoint}: OAWClientConfig) {
    this.appid = appid;
    this.client = axios.create({
      baseURL: `${this.baseURL}${endpoint}`,
      responseType: 'json'
    });
  }

  protected createParams(): URLSearchParams {
    const params = new URLSearchParams();
    params.set('appid', this.appid);
    return params;
  }
}
