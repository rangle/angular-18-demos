import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <pre>
      User data:
      {{ user() | json }}
    </pre
    >
  `,
  styles: ``,
})
export class ProfileComponent {
  user = input();
}
