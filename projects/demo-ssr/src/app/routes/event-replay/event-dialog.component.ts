import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'event-dialog',
  template: `<h1 mat-dialog-title>Clicked!</h1>`,
  standalone: true,
  imports: [MatDialogModule],
  styles: [`
    :host {
      display: block;
      text-align: center;
    }
  `]
})
export class EventDialogComponent {}
