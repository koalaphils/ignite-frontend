import { Component, OnInit, Input } from '@angular/core';
import NavItem from './nav-item';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {
  @Input() navItem: NavItem;

  constructor() { }

  ngOnInit(): void {
  }

}
