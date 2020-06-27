import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
import { InputComponent } from './forms/input/input.component';
import { LabelComponent } from './forms/label/label.component';
import { ErrorsComponent } from './forms/errors/errors.component';

// Exportable Components
const COMPONENTS = [
  Content,
  ContentHeaderComponent,
  ContentBody,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormGroupComponent,
  InputComponent,
  LabelComponent,
  ErrorsComponent
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
    ...COMPONENTS, InputComponent, LabelComponent, ErrorsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
