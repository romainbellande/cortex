import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LinkComponent } from "./link.component";

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [LinkComponent],
  exports: [LinkComponent]
})
export class LinkModule {}
