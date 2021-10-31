import { NgModule } from "@angular/core";
import { AppTileComponent } from "./app-tile.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LinkModule } from '../link/link.module'
import { ToggleModule } from '../toggle/toggle.module'
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule, FontAwesomeModule, LinkModule, ToggleModule],
  declarations: [AppTileComponent],
  exports: [AppTileComponent]
})
export class AppTileModule {}
