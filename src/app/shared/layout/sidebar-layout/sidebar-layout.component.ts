import { Component, OnInit, Inject, Renderer2, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.css']
})
export class SidebarLayoutComponent implements OnInit, OnDestroy {
  classes: string[] = [
    'hold-transition',
    'sidebar-mini',
    'layout-fixed',
  ];

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.classes.forEach(classString => this.renderer.addClass(this.document.body, classString));
  }

  ngOnDestroy(): void {
    this.classes.forEach(classString => this.renderer.removeClass(this.document.body, classString));
  }
}
