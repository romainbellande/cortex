import { Component, Input } from '@angular/core';
import { faCloudSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cortex-app-tile',
  templateUrl: './app-tile.component.html',
  styleUrls: ['./app-tile.component.scss']
})
export class AppTileComponent {
  @Input()
  title!: string;

  @Input()
  description!: string;

  @Input()
  icon!: IconDefinition;

  @Input()
  to!: string;

  faCloudSun = faCloudSun;
}
