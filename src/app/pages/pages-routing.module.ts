import { NgModule } from '@angular/core';
import { NavRoutes } from './pages-enums';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanningComponent } from './planning/planning.component';

const routes: Routes = [
    {
        path: NavRoutes[0].url,
        data: { breadcrumb: NavRoutes[0].label },
        children: [
            { path: NavRoutes[0].url, data: { breadcrumb: null }, component: HomeComponent },
            { path: NavRoutes[1].url, data: { breadcrumb: NavRoutes[1].label }, component: PlanningComponent},
            { path: '**', redirectTo: NavRoutes[0].url, data: { breadcrumb: null }, pathMatch: 'full' }
        ]
    }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
