export interface MapEnv {
  accessToken: string;
}

export interface OpenWeatherMapEnv {
  appid: string;
}

export interface Environment {
  production: boolean;
  map: MapEnv;
  opemweathermap: OpenWeatherMapEnv;
}
