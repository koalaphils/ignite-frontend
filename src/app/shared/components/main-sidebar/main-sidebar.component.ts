import { Component, OnInit } from '@angular/core';
import NavItem from '../nav-item/nav-item';
import { sidebarNavItems } from '../../menus';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit {
  navItems: NavItem[] = sidebarNavItems;
  
  constructor() { }

  ngOnInit(): void {
  }

}
