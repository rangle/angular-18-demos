import { Component } from '@angular/core';

@Component({
  selector: 'i18n',
  standalone: true,
  imports: [],
  templateUrl: './i18n.component.html',
  styleUrl: './i18n.component.css'
})
export class I18nComponent {
  minutes = 0;
  gender = 'female';
  fly = true;
  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
  male() {
    this.gender = 'male';
  }
  female() {
    this.gender = 'female';
  }
  other() {
    this.gender = 'other';
  }
}
