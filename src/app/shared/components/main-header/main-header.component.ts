import { Component, OnInit } from '@angular/core';
import NavItem from '../nav-item/nav-item';
import { headerNavItems } from '../../menus';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  navItems: NavItem[] = headerNavItems;

  constructor() { }

  ngOnInit(): void {
  }

}
