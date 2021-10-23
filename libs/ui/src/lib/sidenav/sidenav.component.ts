import { Component } from '@angular/core';
import { faCloudSun, faTh, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface NavItem {
  text: string;
  to: string;
  icon: IconDefinition;
}

@Component({
  selector: 'cortex-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  isMobileMenuVisible = false;
  faTh = faTh;

  navItems: NavItem[] = [
    {
      text: 'application',
      to: '/',
      icon: faTh
    },
    {
      text: 'weather',
      to: '/applications/weather',
      icon: faCloudSun
    }
  ];

  public toggleMobileMenu() {
    this,this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }
}
