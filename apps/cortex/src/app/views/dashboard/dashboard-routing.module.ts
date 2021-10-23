import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import(
          /* webpackChunkName: "applications" */ './applications/applications.module'
        ).then((m) => m.ApplicationsModule),
        pathMatch: 'full'
      },
      {
        path: 'applications',
        children: [
          {
            path: 'weather',
            loadChildren: () => import(
              /* webpackChunkName: "applications" */ './weather/weather.module'
            ).then((m) => m.WeatherModule),
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
