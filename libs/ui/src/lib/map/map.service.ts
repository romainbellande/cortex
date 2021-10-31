import { Inject, Injectable, Optional } from "@angular/core";
import { MapConfig, MAP_CONFIG } from "./map.config";

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private accessToken = '';

  constructor(@Inject(MAP_CONFIG) @Optional() config?: MapConfig) {
    this.accessToken = config?.accessToken || '';
  }

  getAccessToken(): string {
    return this.accessToken;
  }
}
