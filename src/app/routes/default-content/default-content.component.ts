import { Component } from '@angular/core';

@Component({
  selector: 'app-content-dialog',
  standalone: true,
  imports: [],
  template: `
    <div>
      <div class="dialog-header">
        <ng-content select="header">Default Header</ng-content>
      </div>
      <ng-content select=".contents">No Contents Provided</ng-content>
      <ng-content select="footer">Default Footer</ng-content>
    </div>
  `,
  styles: `
  .dialog-header {
    // background-color: red;
  }
  `,
})
export class ContentDialogComponent {}

@Component({
  selector: 'app-default-content',
  standalone: true,
  imports: [ContentDialogComponent],
  template: `
    <h3 style="text-align: center;">Default Content</h3>
    <hr />

    <app-content-dialog>
      <header>Custom Dialog Header</header>
      <div class="contents">Dialog Contents</div>
      <footer>Custom Dialog Footer</footer>
    </app-content-dialog>
    <hr />

    <app-content-dialog>
      <div class="contents">Just Contents</div>
    </app-content-dialog>
    <hr />

    <app-content-dialog>
      <header>Custom Dialog Header</header>
      <footer>Custom Dialog Footer</footer>
    </app-content-dialog>
  `,
  styles: ``,
})
export class DefaultContentComponent {}
