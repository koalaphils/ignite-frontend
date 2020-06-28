import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarLayoutComponent } from '../shared/layout/sidebar-layout/sidebar-layout.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormModule } from './form/form.module';
import { ProfileModule } from './profile/profile.module';

const routes: Routes = [
  {
    path: '',
    component: SidebarLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module')
          .then(m => m.DashboardModule),
      },
      {
        path: 'form',
        loadChildren: () => import('./form/form.module')
          .then(m => m.FormModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module')
          .then(m => m.ProfileModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
