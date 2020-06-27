import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SidebarLayoutComponent } from './layout/sidebar-layout/sidebar-layout.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { SidebarLogoComponent } from './components/sidebar-logo/sidebar-logo.component';
import { SidebarUserComponent } from './components/sidebar-user/sidebar-user.component';
import { UserContextMenuComponent } from './components/user-context-menu/user-context-menu.component';

@NgModule({
  declarations: [
    SidebarLayoutComponent, 
    MainSidebarComponent, MainHeaderComponent, NavItemComponent, SidebarLogoComponent, SidebarUserComponent, UserContextMenuComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
