import { Component } from '@angular/core';

@Component({
  selector: 'app-form-group',
  template: `
    <div class="form-group">
      <ng-content select="app-label"></ng-content>
      <ng-content select="app-input"></ng-content>
      <ng-content select="app-errors"></ng-content>
    </div>
  `,
})
export class FormGroupComponent {
  constructor() { }
}
