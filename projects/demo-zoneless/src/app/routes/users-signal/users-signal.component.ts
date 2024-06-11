import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

const USERS_URL = 'https://randomuser.me/api?results=10';

@Component({
  selector: 'app-users-signal',
  standalone: true,
  imports: [],
  templateUrl: './users-signal.component.html',
  styleUrl: './users-signal.component.css',
})
export class UsersSignalComponent {
  httpClient = inject(HttpClient);

  usersSignal = toSignal(this.getUsers(), { initialValue: [] });

  getUsers() {
    return this.httpClient
      .get(USERS_URL)
      .pipe(map((response: any) => response.results || []));
  }
}
