import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SidenavItemModule } from "../sidenav-item/sidenav-item.module";
import { SidenavComponent } from "./sidenav.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, SidenavItemModule, FontAwesomeModule],
  declarations: [SidenavComponent],
  exports: [SidenavComponent]
})
export class SidenavModule {}
