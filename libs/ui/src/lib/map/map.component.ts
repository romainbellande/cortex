import { Component, Input, AfterViewInit } from '@angular/core';
import { Map } from 'mapbox-gl';

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

  accessToken = '';

  constructor(private mapService: MapService) {}

  ngAfterViewInit(): void {
    const map = new Map({
        accessToken: this.mapService.getAccessToken(),
        container: this.ref, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
        attributionControl: false
    });

    map.on('load', function () {
      map.resize();
  });
  }

}
