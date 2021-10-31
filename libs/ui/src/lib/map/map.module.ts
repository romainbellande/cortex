import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { MapComponent } from "./map.component";
import { MapConfig, MAP_CONFIG } from "./map.config";
import { MapService } from "./map.service";

@NgModule({
  imports: [CommonModule],
  declarations: [MapComponent],
  providers: [
    MapService,
    {
      provide: MAP_CONFIG,
      useValue: {}
    }
  ],
  exports: [MapComponent]
})
export class MapModule {
  static forRoot(config: MapConfig): ModuleWithProviders<MapModule> {
    return {
      ngModule: MapModule,
      providers: [
        {
          provide: MAP_CONFIG,
          useValue: config
        }
      ]
    }
  }
}
