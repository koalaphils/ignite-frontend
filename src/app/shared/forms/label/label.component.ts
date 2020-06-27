import { Component } from '@angular/core';

@Component({
  selector: 'app-label',
  template: `<label><ng-content></ng-content></label>`,
  styleUrls: ['./label.component.css']
})
export class LabelComponent {

  constructor() { }
}
