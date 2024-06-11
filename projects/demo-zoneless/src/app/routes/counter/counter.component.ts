import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter = signal(0);
  counterSignal = signal(0);
  timerCounter = 0;

  changeDetRef = inject(ChangeDetectorRef);

  incrementCounter(): void {
    this.counter.set(this.counter() + 1);
  }

  ngOnInit(): void {
    setInterval(() => {
      this.timerCounter = this.timerCounter + 1;
      // this.counterSignal.set(this.counterSignal() + 1);
      // this.changeDetRef.markForCheck(); // will work when uncommenting it
    }, 1000);
  }
}
