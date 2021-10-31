export const getCurrentPosition = (options?: PositionOptions): Promise<GeolocationPosition> =>
  new Promise((resolve, reject) =>
    window.navigator.geolocation.getCurrentPosition(resolve, reject, options));
