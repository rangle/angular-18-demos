import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { delay, lastValueFrom, map } from 'rxjs';

const USERS_URL = 'https://randomuser.me/api?results=10';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  counter = signal(0);
  timerCounter = 0;

  httpClient = inject(HttpClient);
  changeDetRef = inject(ChangeDetectorRef);

  usersList: any[] = [];
  users$ = this.getUsers();
  usersSignal = toSignal(this.getUsers(), { initialValue: [] });

  incrementCounter(): void {
    this.counter.set(this.counter() + 1);
  }

  ngOnInit(): void {
    setInterval(() => {
      this.timerCounter = this.timerCounter + 1;
      // this.changeDetRef.markForCheck(); // will work when uncommenting it
    }, 1000);

    this.getUsers()
      .pipe(delay(2000)) // simulating delay so not to interfare with usersSignal update
      .subscribe((response) => {
        this.usersList = response;
        // this.changeDetRef.markForCheck(); // will work when uncommenting it
      });
  }

  getUsers() {
    return this.httpClient
      .get(USERS_URL)
      .pipe(map((response: any) => response.results || []));
  }
  async loadUsers() {
    const response: any = await lastValueFrom(this.httpClient.get(USERS_URL));
  }
}
