import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div class="content-wrapper">
      <ng-content select="app-content-header"></ng-content>
      <ng-content select="app-content-body"></ng-content>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class Content {

}

@Component({
  selector: 'app-content-body',
  template: `
    <section class="content">
      <div class="container-fluid">
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ContentBody {

}

@Component({
  selector: 'app-content-header',
  template: `
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ContentHeaderComponent  {
}
