import { CommonModule } from '@angular/common';
import { Component, computed, input, model, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  firstName = input.required();
  lastName = input.required();
  email = model.required();

  photo = input();

  fullName = computed(() => this.firstName() + ' ' + this.lastName());

  giveHighFile = output();
  // outputFromObservable
  // outputToObservable

  updateEmail() {
    this.email.set('newemail@mail.com');
  }
}
