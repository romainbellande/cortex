import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SearchbarComponent } from "./searchbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [SearchbarComponent],
  exports: [SearchbarComponent]
})
export class SearchbarModule {}
