import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppTileComponent } from './app-tile/app-tile.component';
import { ToggleComponent } from './toggle/toggle.component';
import { LinkComponent } from './link/link.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  declarations: [
    SidenavComponent,
    NavbarComponent,
    ToggleComponent,
    LinkComponent,
    AppTileComponent,
    SearchbarComponent,
    SidenavItemComponent,
    MapComponent,
  ],
  exports: [
    SidenavComponent,
    NavbarComponent,
    AppTileComponent,
    ToggleComponent,
    LinkComponent,
    SearchbarComponent,
    SidenavItemComponent,
    MapComponent
  ],
})
export class UiModule {}
