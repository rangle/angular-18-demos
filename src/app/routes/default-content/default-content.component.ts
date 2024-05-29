import { Component } from '@angular/core';

@Component({
  selector: 'app-content-dialog',
  standalone: true,
  imports: [],
  template: `
    <h3>
      <span>Hello, I am </span>
      <ng-content select="header"></ng-content>
    </h3>

    <h4>
      <ng-content select="footer"></ng-content>
    </h4>
  `,
  styles: ``,
})
export class ContentDialogComponent {}

@Component({
  selector: 'app-default-content',
  standalone: true,
  imports: [ContentDialogComponent],
  template: `
    <p>default-content works!</p>

    <app-content-dialog>
      <strong class="header">Senior Developer</strong>
      <strong class="footer">Experience : 5 years</strong>
    </app-content-dialog>
    <hr />

    <app-content-dialog>
      <strong class="header">Application Developer</strong>
      <strong class="footer">Experience : 2 years</strong>
    </app-content-dialog>
  `,
  styles: ``,
})
export class DefaultContentComponent {}
