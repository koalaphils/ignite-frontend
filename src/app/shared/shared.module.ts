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
import { FormGroupComponent } from './forms/form-group/form-group.component';
import { CardComponent, CardHeaderComponent, CardBodyComponent } from './components/card/card.component';
import { ContentHeaderComponent, Content, ContentBody } from './components/content/content.component';

// Exportable Components
const COMPONENTS = [
  Content,
  ContentHeaderComponent,
  ContentBody,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
];

@NgModule({
  declarations: [
    SidebarLayoutComponent, 
    MainSidebarComponent, 
    MainHeaderComponent,
    NavItemComponent,
    SidebarLogoComponent,
    SidebarUserComponent,
    UserContextMenuComponent,
    FormGroupComponent, 
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
