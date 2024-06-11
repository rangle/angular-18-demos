import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';

const USERS_URL = 'https://randomuser.me/api?results=10';

@Component({
  selector: 'app-users-async',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-async.component.html',
  styleUrl: './users-async.component.css',
})
export class UsersAsyncComponent {
  httpClient = inject(HttpClient);

  users$ = this.getUsers();

  getUsers() {
    return this.httpClient
      .get(USERS_URL)
      .pipe(map((response: any) => response.results || []));
  }
}
