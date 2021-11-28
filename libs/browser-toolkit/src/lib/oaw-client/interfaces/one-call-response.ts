export interface OneCallResponse {
  lat:             number;
  lon:             number;
  timezone:        string;
  timezone_offset: number;
  current: WeatherForecast<number>;
  minutely: WeatherForecast<number>[];
  hourly: WeatherForecast<number>[];
  daily: WeatherForecast<Temp>[];
  alerts?: WeatherAlert[];
}

export interface WeatherAlert {
  sender_name: string;
  event:       string;
  start:       number;
  end:         number;
  description: string;
  tags:        string[];
}

export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface WeatherForecast<T>{
  dt:         number;
  sunrise:    number;
  sunset:     number;
  temp:       T;
  feels_like: number;
  pressure:   number;
  humidity:   number;
  dew_point:  number;
  uvi:        number;
  clouds:     number;
  visibility: number;
  wind_speed: number;
  wind_deg:   number;
  weather:    Weather[];
  rain:       Rain;
}

export interface Rain {
  "1h": number;
}

export interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}
