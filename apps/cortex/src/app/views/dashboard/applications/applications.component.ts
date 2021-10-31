import { Component } from '@angular/core';
import { faCloudSun, faUtensils, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface Application {
  title: string;
  description: string;
  icon: IconDefinition;
  to: string;
}

@Component({
  selector: 'cortex-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent {
  applications: Application[] = [
    {
      title: 'weather',
      description: 'show the current weather',
      icon: faCloudSun,
      to: '/applications/weather'
    },
    {
      title: 'recipes',
      description: 'manage your recipes here!',
      icon: faUtensils,
      to: '#'
    }
  ];
}
