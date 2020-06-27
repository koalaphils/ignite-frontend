import { Component, OnInit, Inject, Renderer2, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'hold-transition');
    this.renderer.addClass(this.document.body, 'login-page');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hold-transition');
    this.renderer.removeClass(this.document.body, 'login-page');
  }
}
