import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card card-default">
      <ng-content select="app-card-header"></ng-content>
      <ng-content select="app-card-body"></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {

}

@Component({
  selector: 'app-card-header',
  template: `
    <div class="card-header">
      <h3 class="card-title"><ng-content></ng-content></h3>
    </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardHeaderComponent {

}

@Component({
  selector: 'app-card-body',
  template: `
    <div class="card-body">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardBodyComponent {

}
