import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SidenavItemComponent } from "./sidenav-item.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  declarations: [SidenavItemComponent],
  exports: [SidenavItemComponent]
})
export class SidenavItemModule {}
