import {
  Component,
  computed,
  signal,
  effect,
  ElementRef,
  viewChild,
  viewChildren,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProfileComponent } from '../../components/profile/profile.component';
import { CommonModule } from '@angular/common';
import { ContentDialogComponent } from '../../components/content-dialog/content-dialog.component';

@Component({
  selector: 'app-demo-signals',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    ProfileComponent,
    ContentDialogComponent,
  ],
  template: `
    <div>
      <h3 style="text-align: center;">Angular Signals</h3>
      <hr />
      <h5>Current: {{ counter() }}</h5>
      <h5>Derived: {{ derivedCounter() }}</h5>
      <button mat-raised-button (click)="increment()">Increment</button>
      <hr />
      <app-profile
        #userProfile
        firstName="Sam"
        lastName="Hans"
        email="samhans@mail"
        (giveHighFile)="giveHighFile()"
      />
      <hr />
      <p #title>Title 1</p>
      <p #title>Title 2</p>
      <p #title>Title 3</p>
      <hr />

      <app-content-dialog>
        <header>Custom Dialog Header</header>
        <div #contents class="contents">Dialog Contents</div>
        <footer>Custom Dialog Footer</footer>
      </app-content-dialog>
    </div>
  `,
})
export class DemoSignalsComponent {
  counter = signal(0);
  derivedCounter = computed(() => {
    return this.counter() * 10;
  });

  title = viewChildren<ElementRef>('title');
  profileComponent = viewChild<ProfileComponent>('userProfile');

  constructor() {
    console.log(`counter value: ${this.counter()}`);

    effect(() => {
      console.log(`New value: ${this.counter()}`);
    });
  }

  ngOnInit() {
    console.log('viewChildren', this.title());
    console.log('viewChild', this.profileComponent());
  }

  increment() {
    console.log(`Updating counter...`);
    this.counter.set(this.counter() + 1);
  }

  giveHighFile() {
    console.log('high five!!');
  }
}
