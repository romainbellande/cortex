import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { SearchbarModule, AppTileModule } from '@cortex/ui';


@NgModule({
  declarations: [
    ApplicationsComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    SearchbarModule,
    AppTileModule
  ]
})
export class ApplicationsModule { }
