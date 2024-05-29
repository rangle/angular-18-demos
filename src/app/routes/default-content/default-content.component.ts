import { Component } from '@angular/core';
import { ContentDialogComponent } from '../../components/content-dialog/content-dialog.component';
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
