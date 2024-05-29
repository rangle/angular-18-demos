import { Component, contentChild } from '@angular/core';

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
  styles: ``,
})
export class ContentDialogComponent {
  contents = contentChild('contents');

  ngOnInit() {
    console.log('contentChild', this.contents());
  }
}
