import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Marker, Map } from 'mapbox-gl';
import { Coordinates } from '@cortex/browser-toolkit';
import { MapService } from './map.service';

@Component({
  selector: 'cortex-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'flex flex-col flex-auto'
  }
})
export class MapComponent implements AfterViewInit {
  @Input()
  ref!: string;

  @Input()
  center!: Coordinates;

  @Output()
  mapEvent = new EventEmitter<Map>();

  accessToken = '';

  constructor(private mapService: MapService) {}

  ngAfterViewInit(): void {
    const map = new Map({
        accessToken: this.mapService.getAccessToken(),
        container: this.ref, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: {
          lat: this.center.latitude,
          lon: this.center.longitude
        },
        zoom: 12, // starting zoom
        attributionControl: false
    });

    new Marker({
      anchor: 'bottom',
    })
    .setLngLat({
      lat: this.center.latitude,
      lon: this.center.longitude
    }).addTo(map);
    // map.on('load', () => {

    //   this.mapEvent.emit(map);
    // });
  }
}
