import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { delay, map } from 'rxjs';

const USERS_URL = 'https://randomuser.me/api?results=10';

@Component({
  selector: 'app-users-property',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-property.component.html',
  styleUrl: './users-property.component.css',
})
export class UsersPropertyComponent {
  httpClient = inject(HttpClient);
  changeDetRef = inject(ChangeDetectorRef);

  usersList: any[] = [];

  ngOnInit(): void {
    this.getUsers()
      .pipe(delay(2000)) // simulating delay so not to interfare with usersSignal update
      .subscribe((response: any) => {
        this.usersList = response;
        // this.changeDetRef.markForCheck(); // will work when uncommenting it
      });
  }

  getUsers() {
    return this.httpClient
      .get(USERS_URL)
      .pipe(map((response: any) => response.results || []));
  }

  clicked() {
    console.log('clicked');
  }
}
