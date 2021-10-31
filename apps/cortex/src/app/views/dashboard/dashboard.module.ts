import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavModule, NavbarModule } from '@cortex/ui';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    NavbarModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
