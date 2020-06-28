import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errors',
  template: `
    <ul *ngFor="let error of errors">
      <li><code>{{ error }}</code></li>
    </ul>
  `,
  styles: [
    `ul {
      padding-top: 5px;
      padding-left: 2px;
      list-style: none;
    }`,
    `ul > li {
      display: inline-block; 
      font-size: 14px;
      font-size: 1rem; 
    }`
  ]
})
export class ErrorsComponent {
  @Input() errors: string[];
  
  constructor() { }
}
