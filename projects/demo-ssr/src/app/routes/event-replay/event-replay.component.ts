import { Component, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EventDialogComponent } from './event-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'event-replay',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './event-replay.component.html',
  styleUrl: './event-replay.component.css',
})
export class EventReplayComponent implements AfterViewInit {

  isHydrated = false;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isHydrated = true;
      this.loadComponent();
    }, 5000);  
  }

  loadComponent(): void {
    console.log('Component has been hydrated');
  }

  handleClick(): void {
    if (this.isHydrated) {
      console.log("clicked");
      this.dialog.open(EventDialogComponent, {});
    } else {
      console.log('Event ignored because component is not hydrated yet');
    }
  }
}
